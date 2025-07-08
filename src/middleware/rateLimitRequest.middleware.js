import { request, response } from "express";
import { rateLimit } from "express-rate-limit";

export const rateLimitRequest = (time, limit, messageRequest) => {
  return rateLimit({
    windowMs: time * 60 * 1000,
    limit: limit,
    handler: (request, response, next) => {
      next({
        statusCode: 429,
        message: `${messageRequest} Inténtelo nuevamente después de ${time} minuto(s).`,
        code: "TOO_MANY_REQUESTS",
        details: "Has excedido el número máximo de solicitudes permitidas.",
      });
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};
