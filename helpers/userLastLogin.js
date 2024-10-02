const { connectionQuery } = require('./connection.helper');

const lastLogin = (userId) => {
  const updateUserLastLogin = `UPDATE users SET LastLogin = CURRENT_TIMESTAMP WHERE id = ?`;
  return connectionQuery(updateUserLastLogin, [userId]);
};

module.exports = { lastLogin };
