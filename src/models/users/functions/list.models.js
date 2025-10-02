import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listUsersModel = async ({ status, correo, rol }) => {
	let where = "WHERE 1=1";
	const values = [];

	if (status && status !== "All") {
		where += " AND cat_status.name = ?";
		values.push(status);
	}

	if (correo && correo !== "All") {
		where += " AND account_type = ?";
		values.push(correo);
	}

	if (rol && rol !== "All") {
		where += " AND role.name = ?";
		values.push(rol);
	}

	const query = `
				SELECT 
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
				${where}
				ORDER BY name_user ASC
  `;

	return await connectionQuery(query, values);
};
