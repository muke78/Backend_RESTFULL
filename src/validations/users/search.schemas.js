import Joi from "joi";

export const schemaSearchUserValidations = Joi.object({
	email: Joi.string().lowercase().trim().min(1).max(255).required().messages({
		"string.base": "El email debe ser un texto",
		"string.empty": "El email no puede estar vacío",
		"string.min": "El email debe tener al menos 3 caracteres",
		"string.max": "El email no puede superar los 255 caracteres",
		"any.required": "El email es obligatorio",
	}),
});
