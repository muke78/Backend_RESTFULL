import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const registerUser = async (nameUser, email, hashedPassword) => {
  const query = `
    INSERT INTO users (ID, NameUser, Email, Password, Role, AccountType, AccountStatus, LastLogin)
    VALUES (UUID(), ?, ?, ?, "user", "normal", "Inactivo", NULL)
  `;
  const params = [nameUser, email, hashedPassword];
  return await connectionQuery(query, params);
};
