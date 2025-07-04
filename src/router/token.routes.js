import express from "express";

import { RefreshToken } from "../controllers/token/index.js";
import { verificarToken } from "../middleware/verificarToken.js";
import { methodOK } from "../server/serverMethods.js";

const apiToken = express.Router();

/**
 * @swagger
 * /token/refresh:
 *   post:
 *     summary: Refresca el token de sesión
 *     description: Genera un nuevo token de acceso si el token anterior es válido y aún no ha expirado. Se recomienda usar este endpoint desde el frontend cuando el token está por expirar.
 *     tags:
 *       - Token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 description: Token de acceso actual que está por expirar.
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: Token actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 data:
 *                   type: string
 *                   description: Nuevo token generado
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       example: 2025-07-04T08:06:58.280Z
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                       example: baeea511-fa16-437a-a122-b99a35f76bd8
 *                     dataCount:
 *                       type: string
 *                       example: "1"
 *       403:
 *         description: El usuario está inactivo. Por favor contacte al administrador.
 *       500:
 *         description: Error interno del servidor.
 */

//POST /api/token/refresh
apiToken.post("/refresh", verificarToken, async (request, response, next) => {
  try {
    const { token } = request.body;
    console.log(token);
    const newToken = await RefreshToken(token);
    console.log(newToken);
    methodOK(request, response, newToken);
  } catch (error) {
    next(error);
  }
});

export { apiToken };
