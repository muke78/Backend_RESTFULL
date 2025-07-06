import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertUser = async (
  nameUser,
  email,
  hashedPassword,
  accountStatus,
  role,
) => {
  const query = `
      INSERT INTO users (ID, NameUser, Email, Password, Role, AccountType, AccountStatus, LastLogin) 
      VALUES (UUID(), ?, ?, ?, ?, "normal", ?, NULL)
    `;
  const params = [nameUser, email, hashedPassword, role, accountStatus];
  return await connectionQuery(query, params);
};
