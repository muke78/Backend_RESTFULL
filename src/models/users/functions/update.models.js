import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const findUserById = async (userId) => {
  const query = `SELECT * FROM users WHERE user_id = ?`;
  const result = await connectionQuery(query, [userId]);
  return result[0];
};

export const extractRoleByName = async (role) => {
  const query = `SELECT role_id FROM role WHERE name = ?`;
  const result = await connectionQuery(query, [role]);
  return result[0];
};

export const extractStatusByName = async (status) => {
  const query = `SELECT status_id FROM cat_status WHERE name = ?`;
  const result = await connectionQuery(query, [status]);
  return result[0];
};

export const updateUser = async ({
  name_user,
  email,
  password,
  role,
  status,
  userId,
}) => {
  // Construir query dinámicamente basado en si hay contraseña o no
  const fields = ["name_user = ?", "email = ?", "role_id = ?", "status_id = ?"];
  const params = [name_user, email, role, status];

  if (password) {
    fields.push("password = ?");
    params.push(password);
  }

  params.push(userId); // WHERE user_id = ?

  const query = `UPDATE users SET ${fields.join(", ")} WHERE user_id = ?`;
  return await connectionQuery(query, params);
};
