import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const searchSupplyService = async (name) => {
  let query = `SELECT 
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
                  cat_status ON cat_status.status_id = cat_supplies.status_id WHERE 1=1`;

  const params = [];

  if (name) {
    query += ` AND cat_supplies.name LIKE ?`;
    params.push(`%${name}%`);
  } else {
    throw {
      statusCode: 400,
      message: "Debe proporcionar un nombre del suministro para buscar",
      code: "NAME_REQUIRED",
      details: "El campo de nombre es obligatorio para realizar busquedas",
    };
  }
  console.log(query);
  const result = await connectionQuery(query, params);

  if (result.length === 0) {
    throw {
      statusCode: 404,
      message: `No se encontro el nombre ${name}`,
      code: "SUPPLY_NOT_FOUND",
      details: `No se encontraron suministros con el nombre proporcionado: ${name}`,
    };
  }

  return result;
};
