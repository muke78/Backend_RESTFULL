import { rateLimit } from "express-rate-limit";

// Bloqueo burst - más restrictivo para prevenir spam
export const burstProtectionLimiter = rateLimit({
  windowMs: 7 * 60 * 1000, // 7 minutos
  limit: 20, // 20 requests en 7 minutos (más restrictivo)
  handler: (request, response, next) => {
    next({
      statusCode: 429,
      message:
        "Demasiadas solicitudes en poco tiempo. Intenta de nuevo en 7 minutos",
      code: "TOO_MANY_REQUESTS",
      details: "Has sido temporalmente bloqueado por actividad sospechosa.",
    });
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
  keyGenerator: (req) => req.ip,
});

// Control normal - más permisivo para uso regular
export const normalLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutos
  limit: 1000,
  handler: (request, response, next) => {
    next({
      statusCode: 429,
      message:
        "Demasiadas solicitudes en poco tiempo. Intenta de nuevo en 1 hora",
      code: "TOO_MANY_REQUESTS",
      details: "Has excedido el número máximo de solicitudes permitidas.",
    });
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip,
});
