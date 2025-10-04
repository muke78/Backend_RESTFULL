import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listProfileModel = async (user_id) => {
	const query = `SELECT 
                        user_id,
                        role.name AS role,
                        name_user,
                        email,
                        profile_picture,
                        account_type,
                        last_login,
                        created,
                        updated,
                        cat_status.name AS status
                    FROM users
                    LEFT JOIN role ON role.role_id = users.role_id
                    LEFT JOIN cat_status ON cat_status.status_id = users.status_id
					WHERE user_id = ?;`;
	const params = [user_id];
	return await connectionQuery(query, params);
};
