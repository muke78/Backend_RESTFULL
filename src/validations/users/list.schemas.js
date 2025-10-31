import Joi from "joi";
import {
	accountTypeSchema,
	paginationSchema,
	roleSchema,
	statusSchema,
} from "../schemas/subSchemas.schemas.js";

export const schemaListUsersValidations = Joi.object({
	status: statusSchema.optional(),
	account_type: accountTypeSchema.optional(),
	role: roleSchema.optional(),
	limit: paginationSchema.extract("limit"),
	page: paginationSchema.extract("page"),
});
