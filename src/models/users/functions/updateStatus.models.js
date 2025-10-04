import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const foundStatusNameModel = async (status) => {
	const query = `SELECT status_id FROM cat_status WHERE name = ?`;
	const params = [status];
	return await connectionQuery(query, params);
};

export const updateStatusUserModel = async (status, userId) => {
	const query = `UPDATE users SET status_id = ? WHERE user_id = ?`;
	const params = [status, userId];
	return await connectionQuery(query, params);
};

export const listFieldStatusUpdatedModel = async (userId) => {
	const query = `SELECT 
                    name_user,
                    cat_status.name AS status
                FROM users
                LEFT JOIN 
                    cat_status ON cat_status.status_id = users.status_id
                WHERE user_id = ?`;
	const params = [userId];
	return await connectionQuery(query, params);
};
