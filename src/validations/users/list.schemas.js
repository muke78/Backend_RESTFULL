import Joi from "joi";
import {
	accountTypeSchema,
	roleSchema,
	statusSchema,
} from "../schemas/subSchemas.schemas.js";

export const schemaListUsersValidations = Joi.object({
	status: statusSchema.optional(),
	account_type: accountTypeSchema.optional(),
	role: roleSchema.optional(),
});
