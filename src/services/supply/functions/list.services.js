import { listSupplyModel } from "../../../models/supply/index.js";

export const listSupplyService = async ({
  name,
  unit,
  supplier,
  cost,
  limitCost,
  status,
}) => {
  let where = "WHERE 1=1";
  const values = [];

  if (name && name !== "All") {
    where += " AND Name = ?";
    values.push(name);
  }

  if (unit && unit !== "All") {
    where += " AND Unit = ?";
    values.push(unit);
  }

  if (supplier && supplier !== "All") {
    where += " AND Supplier = ?";
    values.push(supplier);
  }

  if (cost && cost !== "All" && !limitCost) {
    where += " AND Cost = ?";
    values.push(cost);
  } else if (cost && limitCost) {
    where += " AND Cost BETWEEN ? AND ?";
    values.push(cost, limitCost);
  }

  if (status && status !== "All") {
    where += " AND Status = ?";
    values.push(status);
  }

  const queryString = `
    SELECT * FROM catsupplies ${where} ORDER BY Name ASC
  `;

  const resultList = await listSupplyModel(queryString, values);

  if (resultList.length === 0) {
    throw {
      statusCode: 404,
      message: "No se encontraron suministros con los filtros proporcionados",
      code: "INVENTORY_NOT_FOUND",
      details: `No se encontraron suministros con los filtros proporcionados: ${JSON.stringify(
        { name, unit, supplier, cost, costLimit, status },
      )}`,
    };
  }

  return resultList;
};
