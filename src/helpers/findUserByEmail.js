import { connectionQuery } from "./connection.helper.js";

export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE Email = ?`;
  const params = [email];
  const result = await connectionQuery(query, params);
  return result[0];
};
