import Joi from "joi";
import { statusSchema } from "../schemas/subSchemas.schemas.js";

export const schemaStatusUserValidations = Joi.object({
	status: statusSchema,
});
