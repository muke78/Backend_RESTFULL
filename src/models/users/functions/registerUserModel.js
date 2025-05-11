import { connectionQuery } from "../../../helpers/connection.helper.js";

export const registerUser = async (nameUser, email, hashedPassword, role) => {
  const query = `
    INSERT INTO users (ID, NameUser, Email, Password, Role, AccountType, AccountStatus, LastLogin)
    VALUES (UUID(), ?, ?, ?, ?, "normal", "Inactivo", NULL)
  `;
  const params = [nameUser, email, hashedPassword, role];
  return await connectionQuery(query, params);
};
