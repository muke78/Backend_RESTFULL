import crypto from "node:crypto";

import { config } from "../config/config.js";

export const errorHandler = (err, request, response, next) => {
  const status = err.statusCode || 500;
  const timestamp = new Date().toISOString();
  const errorId = crypto.randomUUID();
  response.status(status).json({
    success: false,
    error: {
      message: err.message || "Se produjo un error inesperado.",
      code: err.code || "INTERNAL_SERVER_ERROR",
      details:
        err.details ||
        "Ocurrió un problema en el servidor. Por favor, intenta más tarde.",
      timestamp,
      errorId,
      stack: config.nodeEnv === "production" ? undefined : err.stack,
      path: request.originalUrl,
      method: request.method,
      query: request.query,
    },
  });
};
