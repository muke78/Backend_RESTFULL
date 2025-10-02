import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const searchUserModel = async (email) => {
	const query = `SELECT 
                        user_id,
                        role.name AS role_name,
                        name_user,
                        email,
                        profile_picture,
                        account_type,
                        last_login,
                        created,
                        updated,
                        cat_status.name AS status_name
                    FROM users
                    LEFT JOIN role ON role.role_id = users.role_id
                    LEFT JOIN cat_status ON cat_status.status_id = users.status_id
                    WHERE email LIKE ?`;
	const params = [`%${email}%`];
	return await connectionQuery(query, params);
};
