import Joi from "joi";
import {
	accountTypeSchema,
	roleSchema,
	statusSchema,
} from "../schemas/subSchemas.schemas.js";

export const schemaListUsersValidations = Joi.object({
	status: statusSchema,
	account_type: accountTypeSchema,
	role: roleSchema,
});
