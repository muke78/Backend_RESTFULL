import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.helpers.js";
import { createToken } from "../../../helpers/jwt.helpers.js";
import { lastLogin } from "../../../helpers/last.login.helpers.js";
import {
	AuthError,
	NotFoundError,
	ConflictError,
	InactiveUserError,
} from "../../../utils/apiError.utils.js";

export const loginService = async ({ email, password }) => {
	const user = await findUserByEmail(email);
	if (!user) {
		throw new NotFoundError("El usuario no ha podidio ser encontrado");
	}

	if (user.account_type === "google") {
		throw new ConflictError("El correo ya esta registrado con google");
	}

	const isPasswordValid = await hashedArg.verify(user.password, password);

	if (!isPasswordValid) {
		throw new AuthError("La contraseña es incorrecta o está mal escrita");
	}

	if (user.status_name === "Inactivo") {
		throw new InactiveUserError(
			"El usuario está inactivo, pida la reactivación a un administrador",
		);
	}
	// Crea el token
	const token = createToken({
		user_id: user.user_id,
		role_id: user.role_id,
	});

	await lastLogin(user.user_id);

	return token;
};
