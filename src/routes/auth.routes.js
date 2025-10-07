import express from "express";
import {
	schemaAuthUserValidations,
	schemaRegisterUserValidations,
} from "../validations/users/index.js";
import { config } from "../config/config.js";
import { Login, RegisterUser } from "../controllers/auth/index.js";
import { validationFields } from "../middleware/validation.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiAuth = express.Router();

//POST /api/auth/logout
apiAuth.post("/logout", async (request, response, next) => {
	try {
		response.clearCookie("access_token", {
			httpOnly: true,
			secure: config.nodeEnv === "production",
		});

		methodOK(request, response, undefined, "Sesión cerrada correctamente");
	} catch (error) {
		next(error);
	}
});

//POST /api/auth/login
apiAuth.post(
	"/login",
	validationFields(schemaAuthUserValidations, "body"),
	async (request, response, next) => {
		try {
			const userData = request.body;
			const token = await Login(userData);

			response.cookie("access_token", token, {
				httpOnly: true,
				secure: config.nodeEnv === "production",
				sameSite: "strict",
				maxAge: 1000 * 60 * 60 * 12, // 12 horas
			});

			methodOK(request, response, undefined, "Sesion iniciada correctamente");
		} catch (error) {
			next(error);
		}
	},
);

//POST /api/auth/register
apiAuth.post(
	"/register",
	validationFields(schemaRegisterUserValidations, "body"),
	async (request, response, next) => {
		try {
			const registerUser = request.body;
			const result = await RegisterUser(registerUser);
			methodCreated(request, response, result, "Se ha registrado exitosamente");
		} catch (error) {
			next(error);
		}
	},
);

export { apiAuth };
