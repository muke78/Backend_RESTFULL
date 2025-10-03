import { searchUserModel } from "../../../models/users/index.js";
import { NotFoundError } from "../../../utils/apiError.utils.js";

export const searchUserService = async (email) => {
	const result = await searchUserModel(email);

	if (result.length === 0) {
		throw new NotFoundError(`No se encontro el correo ${email}`);
	}

	return result;
};
