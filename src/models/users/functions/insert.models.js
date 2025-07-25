import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const extractForeignKeysUserModel = async (role, status) => {
  const query = `SELECT 
    (SELECT 
            role_id
        FROM
            role
        WHERE
            name = ?) AS role,
    (SELECT 
            status_id
        FROM
            cat_status
        WHERE
            name = ?) AS status;`;
  const result = await connectionQuery(query, [role, status]);
  return result;
};

export const insertUserModel = async ({
  name_user,
  email,
  hashedPassword,
  role,
  status,
}) => {
  const query = ` INSERT INTO users (user_id, role_id, name_user, email, password, account_type, status_id) 
  VALUES (UUID(),?, ?, ?, ?, 'local', ?)
    `;
  const params = [role, name_user, email, hashedPassword, status];
  return await connectionQuery(query, params);
};
