import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const searchInventoryService = async (name) => {
  let query = `SELECT * FROM catinventory WHERE 1=1`;
  const params = [];

  if (name) {
    query += ` AND Name LIKE ?`;
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
