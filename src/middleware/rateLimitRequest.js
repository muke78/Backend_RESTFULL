import { rateLimit } from "express-rate-limit";

export const rateLimitRequest = (time, limit, messageRequest) => {
  return rateLimit({
    windowMs: time * 60 * 1000,
    limit: limit,
    message:
      messageRequest + `inténtelo nuevamente después de ${time} minuto(s)`,
    standardHeaders: true,
    legacyHeaders: false,
  });
};
