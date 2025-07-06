import { rateLimitRequest } from "../../middleware/rateLimitRequest.middleware.js";

// Example
// rateLimitRequest(time to try again, limit each IP request per windows, messageRequest response)

export const loginRateLimiter = rateLimitRequest(
  5,
  5,
  "Demasiados intentos de inicio de sesión desde esta IP,",
);

export const listUsersRateLimiter = rateLimitRequest(
  60,
  1000,
  "Demasiadas peticiones para traer la lista de usuarios,",
);
export const searchUsersRateLimiter = rateLimitRequest(
  15,
  300,
  "Demasiadas búsquedas de usuarios desde esta IP, ",
);
export const createUserRateLimiter = rateLimitRequest(
  60,
  50,
  "Límite de creación de usuarios alcanzado, ",
);
export const registerUserRateLimiter = rateLimitRequest(
  60,
  3,
  "Demasiadas solicitudes de registro desde esta IP, ",
);
export const updateUserRateLimiter = rateLimitRequest(
  60,
  100,
  "Demasiadas actualizaciones de usuarios desde esta IP, ",
);
export const deleteUserRateLimiter = rateLimitRequest(
  60,
  50,
  "Límite de eliminación de usuarios alcanzado, ",
);
export const bulkDeleteUserRateLimiter = rateLimitRequest(
  60,
  10,
  "Demasiadas eliminaciones masivas en corto tiempo, ",
);
