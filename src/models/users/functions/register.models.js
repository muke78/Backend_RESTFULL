import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const registerUser = async (name_user, email, hashedPassword) => {
  const query = ` INSERT INTO users (user_id, role_id, name_user, email, password, account_type, status_id) 
  VALUES (UUID(), null, ?, ?, ?, 'local', 'cefdafcc-61f5-11f0-a977-d843ae0db894')
    `;

  const params = [name_user, email, hashedPassword];
  return await connectionQuery(query, params);
};
