import { listUsersModel } from "../../../models/usersModels.js";

export const listUsersService = async (params, query) => {
  const { status } = params;
  const { correo, rol } = query;

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

  return await listUsersModel(queryString, values);
};
