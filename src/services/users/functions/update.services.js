import hashedArg from "argon2";

import { findEmailInOtherUser } from "../../../helpers/getUserByEmailAndId.helpers.js";
import {
	extractForeignKeysUserModel,
	findUserByIdModel,
	updateUserModel,
} from "../../../models/users/index.js";
import { ConflictError, NotFoundError } from "../../../utils/apiError.utils.js";

export const updateUserService = async (
	userId,
	{ name_user, email, password, role, status },
) => {
	// Verificar si otro usuario ya usa ese correo
	const [emailConflict, existingUser, extract] = await Promise.all([
		findEmailInOtherUser(email, userId),
		findUserByIdModel(userId),
		extractForeignKeysUserModel(role, status),
	]);

	if (emailConflict) {
		throw new ConflictError("El correo ya se encuentra registrado");
	}

	// Verificar si el usuario existe
	if (!existingUser) {
		throw new NotFoundError(
			"No se proporcionó un ID válido o el usuario no existe",
		);
	}

	// Preparar datos para actualización
	const updateData = {
		name_user,
		email,
		role: extract[0].role,
		status: extract[0].status,
		userId,
	};

	// Agregar contraseña hasheada si se proporcionó
	if (password && password.trim() !== "") {
		updateData.password = await hashedArg.hash(password);
	}

	const result = await updateUserModel(updateData);
	return result.affectedRows > 0;
};
