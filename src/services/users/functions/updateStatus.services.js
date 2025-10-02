import {
	foundStatusNameModel,
	updateStatusUserModel,
	listFieldStatusUpdatedModel,
} from "../../../models/users/index.js";

import {
	FieldsRequiredError,
	NotFoundError,
} from "../../../utils/apiError.utils.js";

export const updatedStatusService = async (userId, { status }) => {
	if (!userId) {
		throw new FieldsRequiredError("Todos los campos son obligatorios");
	}

	// 1. Buscar el status_id correspondiente
	const foundStatus = await foundStatusNameModel(status);

	if (foundStatus.length === 0) {
		throw new NotFoundError(`El estatus ${status} no ha podido ser`);
	}

	const statusId = foundStatus[0].status_id;

	// 2. Actualizar el usuario
	await updateStatusUserModel(statusId, userId);

	// 3. Devolver la info actualizada
	const result = await listFieldStatusUpdatedModel(userId);
	return result[0];
};
