import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const searchInventoryService = async (name) => {
  let query = `SELECT 
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
                      INNER JOIN cat_status ON cat_status.status_id = cat_inventory.status_id WHERE 1=1`;
  const params = [];

  if (name) {
    query += ` AND cat_inventory.name LIKE ?`;
    params.push(`%${name}%`);
  } else {
    throw {
      statusCode: 400,
      message: "Debe proporcionar un nombre del inventario para buscar",
      code: "NAME_REQUIRED",
      details: "El campo de nombre es obligatorio para realizar busquedas",
    };
  }

  const result = await connectionQuery(query, params);

  if (result.length === 0) {
    throw {
      statusCode: 404,
      message: `No se encontro el nombre ${name}`,
      code: "INVENTORY_NOT_FOUND",
      details: `No se encontraron inventarios con el nombre proporcionado: ${name}`,
    };
  }

  return result;
};
