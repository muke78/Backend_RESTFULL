import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteUser = async (userId) => {
  const query = `DELETE FROM users WHERE user_id = ?`;
  const params = [userId];
  return await connectionQuery(query, params);
};

export const deleteUserBulk = async (placeholders, batch) => {
  const query = `DELETE FROM users WHERE user_id IN (${placeholders})`;
  return await connectionQuery(query, batch);
};
