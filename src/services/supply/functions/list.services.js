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
    where += " AND cat_supplies.name = ?";
    values.push(name);
  }

  if (unit && unit !== "All") {
    where += " AND supply_units.name = ?";
    values.push(unit);
  }

  if (supplier && supplier !== "All") {
    where += " AND cat_supplier.name = ?";
    values.push(supplier);
  }

  if (cost && cost !== "All" && !limitCost) {
    where += " AND cost = ?";
    values.push(cost);
  } else if (cost && limitCost) {
    where += " AND cost BETWEEN ? AND ?";
    values.push(cost, limitCost);
  }

  if (status && status !== "All") {
    where += " AND cat_status.name = ?";
    values.push(status);
  }

  const queryString = `
                      SELECT 
                      supplies_id,
                      cat_supplier.name AS supplier,
                      supply_units.name AS unit,
                      cat_supplies.name,
                      cat_supplies.description,
                      quantity,
                      purchase_date,
                      expiry_date,
                      cost,
                      cat_status.name AS status
                  FROM
                      cat_supplies
                          INNER JOIN
                      cat_supplier ON cat_supplier.supplier_id = cat_supplies.supplier_id
                          INNER JOIN
                      supply_units ON supply_units.unit_id = cat_supplies.unit_id
                          INNER JOIN
                      cat_status ON cat_status.status_id = cat_supplies.status_id
                      ${where} 
                  ORDER BY cat_supplies.name ASC`;

  const resultList = await listSupplyModel(queryString, values);

  if (resultList.length === 0) {
    throw {
      statusCode: 404,
      message: "No se encontraron suministros con los filtros proporcionados",
      code: "INVENTORY_NOT_FOUND",
      details: `No se encontraron suministros con los filtros proporcionados: ${JSON.stringify(
        { name, unit, supplier, cost, limitCost, status },
      )}`,
    };
  }

  return resultList;
};
