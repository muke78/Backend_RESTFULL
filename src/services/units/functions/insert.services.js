import { randomUUID } from "node:crypto";

import { insertUnitModel } from "../../../models/units/index.js";

export const insertUnitService = async ({ name, symbol }) => {
	if (!name) {
		throw {
			statusCode: 400,
			message: "Debe de proporcionar todos los campos",
			code: "FIELDS_REQUIRED",
			details: "Todos los campos son obligatorios para crear una unidad",
		};
	}

	const newUnit = {
		unit_id: randomUUID(),
		name,
		symbol,
	};

	const result = await insertUnitModel(newUnit);

	if (!result.affectedRows > 0) {
		throw {
			statusCode: 500,
			message: "No se pudo crear la unidad",
			code: "UNIT_CREATION_FAILED",
			details:
				"Hubo un error al intentar insertar la unidad en la base de datos",
		};
	}
	return newUnit;
};
