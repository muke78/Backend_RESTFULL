import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.helpers.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.helpers.js";
import { registerUserModel } from "../../../models/users/functions/register.models.js";
import { ConflictError, DatabaseError } from "../../../utils/apiError.utils.js";

export const registerUserService = async ({ name_user, email, password }) => {
	const existingUser = await findUserByEmail(email);

	if (existingUser) {
		throw new ConflictError("El correo ya se encuentra registrado");
	}

	const hashedPassword = await hashedArg.hash(password);
	const insertResult = await registerUserModel(
		name_user,
		email,
		hashedPassword,
	);

	if (insertResult.affectedRows > 0) {
		const newUser = await getUserByEmail(email);
		return newUser;
	} else {
		throw new DatabaseError(
			"No se pudo registrar el usuario en la base de datos",
		);
	}
};
