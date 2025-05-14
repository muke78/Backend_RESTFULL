import { connectionQuery } from "../../../helpers/connection.helper.js";

export const searchUserService = async ({ email }) => {
  let querySearchUsers = `SELECT * FROM users WHERE 1=1`;
  const queryParamsSearch = [];

  if (email) {
    querySearchUsers += ` AND Email LIKE ?`;
    queryParamsSearch.push(`%${email}%`);
  } else {
    throw { status: 400, message: "Debe proporcionar un correo para buscar" };
  }

  const resultSearch = await connectionQuery(
    querySearchUsers,
    queryParamsSearch,
  );

  if (resultSearch.length === 0) {
    throw { status: 400, message: `No se encontro el correo ${email}` };
  }

  return resultSearch;
};
