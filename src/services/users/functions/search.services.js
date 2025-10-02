import { searchUserModel } from "../../../models/users/index.js";
import {
	FieldsRequiredError,
	NotFoundError,
} from "../../../utils/apiError.utils.js";

export const searchUserService = async (email) => {
	if (!email) {
		throw new FieldsRequiredError("Todos los campos son obligatorios");
	}

	const result = await searchUserModel(email);

	if (result.length === 0) {
		throw new NotFoundError(`No se encontro el correo ${email}`);
	}

	return result;
};
