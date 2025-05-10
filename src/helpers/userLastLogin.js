import { connectionQuery } from "./connection.helper.js";

export const lastLogin = (userId) => {
  const updateUserLastLogin = `UPDATE users SET LastLogin = CURRENT_TIMESTAMP WHERE id = ?`;
  return connectionQuery(updateUserLastLogin, [userId]);
};
