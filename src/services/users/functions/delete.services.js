import { validateFoundToEliminated } from "../../../helpers/delete.helpers.js";
import {
	deleteUserBulkModel,
	deleteUserModel,
} from "../../../models/users/index.js";
import {
	BadRequestError,
	FieldsRequiredError,
	NotFoundError,
	TooManyIdsError,
} from "../../../utils/apiError.utils.js";

export const deleteUserService = async (userId) => {
	if (!userId) {
		throw new FieldsRequiredError("Todos los campos son obligatorios");
	}

	const foundUserToEliminated = await validateFoundToEliminated(
		userId,
		"user_id",
		"name_user",
		"users",
	);

	if (foundUserToEliminated.length === 0) {
		throw new NotFoundError("El usuario no fue encontrado");
	}

	const deleteUserFromID = await deleteUserModel(userId);
	if (deleteUserFromID.affectedRows === 0) {
		throw new NotFoundError("El usuario no fue encontrado para eliminar");
	}

	return foundUserToEliminated[0];
};

export const deleteUserBulkService = async (ids) => {
	const MAX_IDS = 600;

	if (!Array.isArray(ids) || ids.length === 0) {
		throw new BadRequestError("Se debe proporcionar un arreglo válido de IDs");
	}

	if (ids.length > MAX_IDS) {
		throw new TooManyIdsError(
			`No se pueden eliminar más de ${MAX_IDS} usuarios en una sola solicitud`,
		);
	}

	const batchSize = 100;
	const totalBatches = Math.ceil(ids.length / batchSize);

	for (let i = 0; i < totalBatches; i++) {
		const batch = ids.slice(i * batchSize, (i + 1) * batchSize);
		const placeholders = batch.map(() => "?").join(",");
		await deleteUserBulkModel(placeholders, batch);
	}
};
