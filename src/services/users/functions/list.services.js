import { listUsersModel } from "../../../models/users/index.js";
import { NotFoundError } from "../../../utils/apiError.utils.js";

export const listUsersService = async ({ status, correo, rol }) => {
	const resultList = await listUsersModel({ status, correo, rol });

	if (resultList.length === 0) {
		throw new NotFoundError(
			"No se encontraron usuarios con los filtros proporcionados",
			{ details: `${JSON.stringify({ status, correo, rol })}` },
		);
	}

	return resultList;
};
