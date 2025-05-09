import { connectionQuery } from "./connection.helper.js";

const lastLogin = (userId) => {
  const updateUserLastLogin = `UPDATE users SET LastLogin = CURRENT_TIMESTAMP WHERE id = ?`;
  return connectionQuery(updateUserLastLogin, [userId]);
};

export { lastLogin };
