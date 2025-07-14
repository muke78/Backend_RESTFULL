import { listInventoryModel } from "../../../models/inventory/index.js";

export const listInventoryService = async ({
  name,
  weight,
  location,
  condition,
  status,
}) => {
  let where = "WHERE 1=1";
  const values = [];

  if (name && name !== "All") {
    where += " AND Name = ?";
    values.push(name);
  }

  if (weight && weight !== "All") {
    where += " AND Weight = ?";
    values.push(weight);
  }

  if (location && location !== "All") {
    where += " AND Location = ?";
    values.push(location);
  }

  if (condition && condition !== "All") {
    where += " AND `Condition` = ?";
    values.push(condition);
  }

  if (status && status !== "All") {
    where += " AND Status = ?";
    values.push(status);
  }

  const queryString = `
    SELECT * FROM catinventory ${where} ORDER BY Name ASC
  `;

  const resultList = await listInventoryModel(queryString, values);

  if (resultList.length === 0) {
    throw {
      statusCode: 404,
      message: "No se encontraron inventarios con los filtros proporcionados",
      code: "INVENTORY_NOT_FOUND",
      details: `No se encontraron inventarios con los filtros proporcionados: ${JSON.stringify(
        { name, weight, location, condition, status },
      )}`,
    };
  }

  return resultList;
};
