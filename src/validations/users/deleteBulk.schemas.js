import Joi from "joi";

export const schemaBulkDeleteUserValidations = Joi.object({
	ids: Joi.array()
		.items(
			Joi.string()
				.uuid({ version: ["uuidv1", "uuidv4", "uuidv5"] })
				.required()
				.messages({
					"string.uuid": "Cada id debe ser un UUID válido",
					"any.required": "El id es obligatorio",
				}),
		)
		.min(1)
		.max(600)
		.required()
		.messages({
			"array.base": "Ids debe ser un arreglo",
			"array.min": "Debe proporcionar al menos un id",
			"array.max": "El limite maximo de ids son 600",
			"any.required": "El campo ids es obligatorio",
		}),
});
