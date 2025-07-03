import { listUsersModel } from "../../../models/users/index.js";

export const listUsersService = async ({ status, correo, rol }) => {
  let where = "WHERE 1=1";
  const values = [];

  if (status && status !== "All") {
    where += " AND AccountStatus = ?";
    values.push(status);
  }

  if (correo && correo !== "All") {
    where += " AND AccountType = ?";
    values.push(correo);
  }

  if (rol && rol !== "All") {
    where += " AND Role = ?";
    values.push(rol);
  }

  const queryString = `
    SELECT * FROM users
    ${where}
    ORDER BY NameUser ASC
  `;

  const resultList = await listUsersModel(queryString, values);

  if (resultList.length === 0) {
    throw {
      statusCode: 404,
      message: "No se encontraron usuarios con los filtros proporcionados",
      code: "USERS_NOT_FOUND",
      details: `No se encontraron usuarios con los filtros proporcionados: ${JSON.stringify({ status, correo, rol })}`,
    };
  }

  return resultList;
};
