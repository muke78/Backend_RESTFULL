import { listAssetsModel } from "../../../models/assets/index.js";

export const listAssetsService = async ({
  cost,
  limitCost,
  location,
  condition,
  status,
}) => {
  let where = "WHERE 1=1";
  const values = [];

  if (cost && cost !== "All" && !limitCost) {
    where += " AND Cost = ?";
    values.push(cost);
  } else if (cost && limitCost) {
    where += " AND Cost BETWEEN ? AND ?";
    values.push(cost, limitCost);
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
    SELECT * FROM catassets ${where} ORDER BY Name ASC
  `;

  const resultList = await listAssetsModel(queryString, values);

  if (resultList.length === 0) {
    throw {
      statusCode: 404,
      message: "No se encontraron activos con los filtros proporcionados",
      code: "ASSETS_NOT_FOUND",
      details: `No se encontraron activos con los filtros proporcionados: ${JSON.stringify(
        { cost, limitCost, location, condition, status },
      )}`,
    };
  }

  return resultList;
};
