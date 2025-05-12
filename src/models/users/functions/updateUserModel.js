import { connectionQuery } from "../../../helpers/connection.helper.js";

export const findUserById = async (id) => {
  const query = `SELECT * FROM users WHERE ID = ?`;
  const result = await connectionQuery(query, [id]);
  return result[0];
};

export const updateUserWithPassword = async ({
  nameUser,
  email,
  password,
  role,
  accountStatus,
  id,
}) => {
  const query = `
    UPDATE users 
    SET NameUser = ?, Email = ?, Password = ?, Role = ?, AccountStatus = ? 
    WHERE ID = ?
  `;
  const params = [nameUser, email, password, role, accountStatus, id];
  return await connectionQuery(query, params);
};

export const updateUserWithoutPassword = async ({
  nameUser,
  email,
  role,
  accountStatus,
  id,
}) => {
  const query = `
    UPDATE users 
    SET NameUser = ?, Email = ?, Role = ?, AccountStatus = ? 
    WHERE ID = ?
  `;
  const params = [nameUser, email, role, accountStatus, id];
  return await connectionQuery(query, params);
};
