import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const checkUser = async (email) => {
  const queryCheckUser = `SELECT * FROM users WHERE Email = ?`;
  const params = [email];
  return await connectionQuery(queryCheckUser, params);
};

export const createUser = async (newUserId, name, email, picture) => {
  const queryInsertByGoogle = `
      INSERT INTO users (ID, NameUser, Email, Password, ProfilePicture, AccountType, AccountStatus)
      VALUES (?, ?, ?, NULL, ?, 'google', 'Inactivo')`;
  const params = [newUserId, name, email, picture];
  return await connectionQuery(queryInsertByGoogle, params);
};

export const getRecoveryUserById = async () => {
  const queryGetUser = `SELECT ID, NameUser, Email, ProfilePicture, Role, AccountType, AccountStatus FROM users WHERE ID = ?`;
  const params = [newUserId];
  return await connectionQuery(queryGetUser, params);
};
