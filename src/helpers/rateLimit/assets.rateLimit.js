// import { rateLimitRequest } from "../../middleware/rateLimitRequest.middleware.js";

// // Example
// // rateLimitRequest(time to try again, limit each IP request per windows, messageRequest response)

// export const listAssetsRateLimiter = rateLimitRequest(
//   60,
//   1000,
//   "Demasiadas peticiones para traer la lista de activos,",
// );

// export const searchAssetsRateLimiter = rateLimitRequest(
//   15,
//   300,
//   "Demasiadas búsquedas de activos desde esta IP, ",
// );

// export const createAssetsRateLimiter = rateLimitRequest(
//   60,
//   50,
//   "Límite de creación de activos alcanzado, ",
// );

// export const updateAssetsRateLimiter = rateLimitRequest(
//   60,
//   100,
//   "Demasiadas actualizaciones de activos desde esta IP, ",
// );

// export const moveToVaultAssetDeletedRateLimit = rateLimitRequest(
//   60,
//   100,
//   "Demasiadas peticiones para el envio a la boveda, ",
// );

// export const deleteAssetsRateLimiter = rateLimitRequest(
//   60,
//   50,
//   "Límite de eliminación de activos alcanzado, ",
// );

// export const bulkDeleteAssetsRateLimiter = rateLimitRequest(
//   60,
//   10,
//   "Demasiadas eliminaciones masivas en corto tiempo, ",
// );
