import { connectionQuery } from "../../../helpers/connection.helper.js";

export const validateFoundUserToEliminated = async (id) => {
  const query = `SELECT NameUser FROM users WHERE id = ?`;
  const params = [id];
  return await connectionQuery(query, params);
};

export const deleteUser = async (id) => {
  const query = `DELETE FROM users WHERE id = ?`;
  const params = [id];
  return await connectionQuery(query, params);
};

export const deleteUserBulk = async (placeholders, batch) => {
  const query = `DELETE FROM users WHERE id IN (${placeholders})`;
  return await connectionQuery(query, batch);
};
