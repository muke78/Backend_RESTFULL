import { logger } from "../utils/logger.utils.js";
import { config } from "../config/config.js";
import { InternalServerError } from "../utils/apiError.utils.js";

export const errorHandler = (err, req, res, next) => {
	const isDevelopment = config.nodeEnv === "development";

	if (!(err instanceof Error) || !err.statusCode) {
		err = new InternalServerError("Unexpected Error", { original: err });
	}

	const statusCode = err.statusCode || 500;
	const code = err.code || "INTERNAL_SERVER_ERROR";
	const message = err.message || "An unexpected error occurred";

	// Se crea el objeto para construir la respuesta que mande el servidor
	logger.error({
		message,
		code,
		statusCode: statusCode,
		stack: err.stack,
		details: err.details,
		path: req.originalUrl,
		method: req.method,
		user: req.user ? req.user.id : undefined,
	});

	const response = {
		success: "false",
		httpStatus: statusCode,
		code,
		message,
	};

	if (isDevelopment) {
		response.details = err.details;
		response.stack = err.stack;
	}

	res.status(statusCode).json(response);
};
