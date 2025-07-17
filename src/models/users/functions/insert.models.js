import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertUser = async (
  name_user,
  email,
  hashedPassword,
  status_id,
  role_id,
) => {
  const query = ` INSERT INTO users (user_id, role_id, name_user, email, password, account_type, status_id) 
  VALUES (UUID(),?, ?, ?, ?, 'local', ?)
    `;
  const params = [role_id, name_user, email, hashedPassword, status_id];
  return await connectionQuery(query, params);
};
