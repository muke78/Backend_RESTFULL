import { faker } from "@faker-js/faker";
import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.helpers.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.helpers.js";
import {
	extractForeignKeysUserModel,
	insertUserModel,
} from "../../../models/users/index.js";
import {
	ConflictError,
	DatabaseError,
	FieldsRequiredError,
} from "../../../utils/apiError.utils.js";

export const insertUserService = async ({
	name_user,
	email,
	password,
	role,
	status,
}) => {
	if (!name_user || !email || !password || !role || !status) {
		throw new FieldsRequiredError("Todos los campos son obligatorios");
	}

	const existingUser = await findUserByEmail(email);
	if (existingUser) {
		throw new ConflictError("El correo ya se encuentra registrado");
	}

	const extract = await extractForeignKeysUserModel(role, status);

	const hashedPassword = await hashedArg.hash(password);
	const insertResult = await insertUserModel({
		name_user,
		email,
		hashedPassword,
		role: extract[0].role,
		status: extract[0].status,
	});

	if (insertResult.affectedRows > 0) {
		const newUser = await getUserByEmail(email);
		return newUser;
	} else {
		throw new DatabaseError("No se pudo crear el usuario en la base de datos");
	}
};

export const insertUserMasiveService = async (countInsert) => {
	if (!countInsert || Number.isNaN(countInsert)) {
		throw new FieldsRequiredError("Todos los campos son obligatorios");
	}

	const insertados = [];

	for (let i = 0; i < countInsert; i++) {
		const name_user = faker.internet.username();
		const email = faker.internet.email();
		const password = faker.internet.password();
		const role = undefined;
		const status = "cefdafcc-61f5-11f0-a977-d843ae0db894";

		const existingUser = await findUserByEmail(email);
		if (existingUser) {
			throw new ConflictError("El correo ya se encuentra registrado");
		}

		const hashedPassword = await hashedArg.hash(password);
		const insertResult = await insertUserModel(
			name_user,
			email,
			hashedPassword,
			role,
			status,
		);

		if (insertResult.affectedRows > 0) {
			insertados.push({ name_user, email, hashedPassword, role, status });
		}
	}
	return insertados;
};
