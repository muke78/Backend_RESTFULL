import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const searchAssetsService = async (name) => {
  let query = `SELECT 
                      assets_id,
                      asset_conditions.name AS 'condition',
                      cat_classrooms.name AS location,
                      cat_assets.name,
                      cat_assets.description,
                      purchase_date,
                      cost,
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
                      cat_status ON cat_status.status_id = cat_assets.status_id WHERE 1=1`;
  const params = [];

  if (name) {
    query += ` AND cat_assets.name LIKE ?`;
    params.push(`%${name}%`);
  } else {
    throw {
      statusCode: 400,
      message: "Debe proporcionar un nombre del activo para buscar",
      code: "NAME_REQUIRED",
      details: "El campo de nombre es obligatorio para realizar busquedas",
    };
  }

  const result = await connectionQuery(query, params);

  if (result.length === 0) {
    throw {
      statusCode: 404,
      message: `No se encontro el nombre ${name}`,
      code: "ASSET_NOT_FOUND",
      details: `No se encontraron activos con el nombre proporcionado: ${name}`,
    };
  }

  return result;
};
