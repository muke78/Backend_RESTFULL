import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const validateFoundUserToEliminated = async (userId) => {
  const query = `SELECT NameUser FROM users WHERE id = ?`;
  const params = [userId];
  return await connectionQuery(query, params);
};

export const deleteUser = async (userId) => {
  const query = `DELETE FROM users WHERE id = ?`;
  const params = [userId];
  return await connectionQuery(query, params);
};

export const deleteUserBulk = async (placeholders, batch) => {
  const query = `DELETE FROM users WHERE id IN (${placeholders})`;
  return await connectionQuery(query, batch);
};
