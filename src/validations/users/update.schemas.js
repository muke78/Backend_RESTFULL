import Joi from "joi";
import {
	emailSchema,
	nameUserSchema,
	passwordSchema,
	roleSchema,
	statusSchema,
} from "../schemas/subSchemas.schemas.js";

export const schemaUpdateUserValidations = Joi.object({
	name_user: nameUserSchema.optional(),
	email: emailSchema.optional(),
	password: passwordSchema.optional(),
	role: roleSchema.optional(),
	status: statusSchema.optional(),
});
