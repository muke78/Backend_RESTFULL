import jwt from "jsonwebtoken";

import { config } from "../config/config.js";
import { AuthError } from "../utils/apiError.utils.js";

export const verificarToken = (request, _response, next) => {
	const token = request.header("Authorization");

	if (!token) {
		throw new AuthError("Acceso no autorizado, token no proporcionado");
	}

	const bearerToken = token.split(" ")[1];
	if (!bearerToken) {
		throw new AuthError("Acceso no autorizado, bearer no proporcionado");
	}

	try {
		const decoded = jwt.verify(bearerToken, config.jwt.secret);
		request.usuario = decoded;
		next();
	} catch (_error) {
		throw new AuthError("Acceso no autorizado: token inválido");
	}
};
