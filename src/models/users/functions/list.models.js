import { connectionQuery } from "../../../helpers/connection.helpers.js";
import {
	buildCountQuery,
	calculatePagination,
} from "../../../helpers/pagination.helpers.js";

export const listUsersModel = async (
	status,
	account_type,
	role,
	limit,
	page,
) => {
	let where = "WHERE 1=1";
	const values = [];

	if (status && status !== "All") {
		where += " AND cat_status.name = ?";
		values.push(status);
	}

	if (account_type && account_type !== "All") {
		where += " AND account_type = ?";
		values.push(account_type);
	}

	if (role && role !== "All") {
		where += " AND role.name = ?";
		values.push(role);
	}

	const joins = `
		LEFT JOIN role ON role.role_id = users.role_id
		LEFT JOIN cat_status ON cat_status.status_id = users.status_id
	`;

	const countQuery = buildCountQuery("users", joins, where);
	const [countResult] = await connectionQuery(countQuery, values);
	const totalRecords = countResult.total;

	const { pagination } = calculatePagination(totalRecords, page, limit);

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
		${joins}
		${where}
		ORDER BY created DESC, user_id DESC
		LIMIT ? OFFSET ?
	`;

	const rows = await connectionQuery(query, [
		...values,
		limit,
		pagination.offset,
	]);

	return { rows, pagination };
};
