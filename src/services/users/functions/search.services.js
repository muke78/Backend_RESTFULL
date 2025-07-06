import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const searchUserService = async (email) => {
  let querySearchUsers = `SELECT * FROM users WHERE 1=1`;
  const queryParamsSearch = [];

  if (email) {
    querySearchUsers += ` AND Email LIKE ?`;
    queryParamsSearch.push(`%${email}%`);
  } else {
    throw {
      statusCode: 400,
      message: "Debe proporcionar un correo para buscar",
      code: "EMAIL_REQUIRED",
      details: "El campo de correo es obligatorio para realizar busquedas",
    };
  }

  const resultSearch = await connectionQuery(
    querySearchUsers,
    queryParamsSearch,
  );

  if (resultSearch.length === 0) {
    throw {
      statusCode: 404,
      message: `No se encontro el correo ${email}`,
      code: "USER_NOT_FOUND",
      details: `No se encontraron usuarios con el correo proporcionado: ${email}`,
    };
  }

  return resultSearch;
};
