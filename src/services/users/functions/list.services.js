import { listUsersModel } from "../../../models/users/index.js";
import { NotFoundError } from "../../../utils/apiError.utils.js";

export const listUsersService = async ({ status, account_type, role }) => {
	const result = await listUsersModel(status, account_type, role);

	if (result.length === 0) {
		throw new NotFoundError(
			"No se encontraron usuarios con los filtros proporcionados",
			{ details: `${JSON.stringify({ status, account_type, role })}` },
		);
	}

	return result;
};
