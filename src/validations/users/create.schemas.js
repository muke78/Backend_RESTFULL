import Joi from "joi";
import {
	emailSchema,
	nameUserSchema,
	passwordSchema,
	roleSchema,
	statusSchema,
} from "../schemas/subSchemas.schemas.js";

export const schemaCreateUserValidations = Joi.object({
	name_user: nameUserSchema,
	email: emailSchema,
	password: passwordSchema,
	role: roleSchema,
	status: statusSchema,
});
