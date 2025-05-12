import { rateLimit } from "express-rate-limit";

import { methodTooManyRequests } from "../server/serverMethods.js";

export const rateLimitRequest = (time, limit, messageRequest) => {
  return rateLimit({
    windowMs: time * 60 * 1000,
    limit: limit,
    handler: (req, res) => {
      methodTooManyRequests(
        req,
        res,
        messageRequest + `inténtelo nuevamente después de ${time} minuto(s)`,
      );
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
};
