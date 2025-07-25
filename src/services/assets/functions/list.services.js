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
    where += " AND cost = ?";
    values.push(cost);
  } else if (cost && limitCost) {
    where += " AND cost BETWEEN ? AND ?";
    values.push(cost, limitCost);
  }

  if (location && location !== "All") {
    where += " AND cat_classrooms.name = ?";
    values.push(location);
  }

  if (condition && condition !== "All") {
    where += " AND asset_conditions.name = ?";
    values.push(condition);
  }

  if (status && status !== "All") {
    where += " AND cat_status.name = ?";
    values.push(status);
  }

  const queryString = `
                      SELECT 
                      assets_id,
                      asset_conditions.name AS 'condition',
                      cat_classrooms.name AS location,
                      cat_assets.name,
                      cat_assets.description,
                      purchase_date,
                      FORMAT(cost, 2) AS cost,
                      last_maintenance_date,
                      warranty_end_date,
                      created,
                      updated,
                      cat_status.name AS status
                  FROM
                      cat_assets
                          INNER JOIN
                      asset_conditions ON asset_conditions.condition_id = cat_assets.condition_id
                          INNER JOIN
                      cat_classrooms ON cat_classrooms.location_id = cat_assets.location_id
                          INNER JOIN
                      cat_status ON cat_status.status_id = cat_assets.status_id
                  ${where}
                  ORDER BY cat_assets.name ASC
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
