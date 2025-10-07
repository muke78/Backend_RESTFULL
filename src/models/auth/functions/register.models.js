import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const registerUserModel = async (name_user, email, hashedPassword) => {
	const query = `
		INSERT INTO users 
		(user_id, role_id, name_user, email, password, account_type, status_id) VALUES
		(UUID(), null, ?, ?, ?, 'local', (SELECT status_id FROM cat_status WHERE name = 'Inactivo'))
    `;

	const params = [name_user, email, hashedPassword];
	return await connectionQuery(query, params);
};
