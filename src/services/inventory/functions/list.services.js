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
    where += " AND cat_inventory.name = ?";
    values.push(name);
  }

  if (weight && weight !== "All") {
    where += " AND weight = ?";
    values.push(weight);
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
                      inventory_id, 
                      asset_conditions.name AS 'condition', 
                      cat_classrooms.name AS location, 
                      cat_inventory.name, 
                      cat_inventory.description, 
                      quantity,
                      weight,
                      width,
                      height,
                      purchase_date, 
                      FORMAT(cost, 2) AS cost,
                      last_maintenance_date, 
                      warranty_end_date, 
                      created, 
                      updated, 
                      cat_status.name AS status 
                    FROM 
                      cat_inventory 
                      INNER JOIN asset_conditions ON asset_conditions.condition_id = cat_inventory.condition_id 
                      INNER JOIN cat_classrooms ON cat_classrooms.location_id = cat_inventory.location_id 
                      INNER JOIN cat_status ON cat_status.status_id = cat_inventory.status_id ${where} 
                    ORDER BY 
                      cat_inventory.name ASC

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
