import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const findUserById = async (userId) => {
  const query = `SELECT * FROM users WHERE ID = ?`;
  const result = await connectionQuery(query, [userId]);
  return result[0];
};

export const updateUserWithPassword = async ({
  nameUser,
  email,
  password,
  role,
  accountStatus,
  userId,
}) => {
  const query = `
    UPDATE users 
    SET NameUser = ?, Email = ?, Password = ?, Role = ?, AccountStatus = ? 
    WHERE ID = ?
  `;
  const params = [nameUser, email, password, role, accountStatus, userId];
  return await connectionQuery(query, params);
};

export const updateUserWithoutPassword = async (
  nameUser,
  email,
  role,
  accountStatus,
  userId,
) => {
  const query = `
    UPDATE users 
    SET NameUser = ?, Email = ?, Role = ?, AccountStatus = ? 
    WHERE ID = ?
  `;
  const params = [nameUser, email, role, accountStatus, userId];
  return await connectionQuery(query, params);
};
