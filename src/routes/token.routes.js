import express from "express";

import { RefreshToken } from "../controllers/token/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodOK } from "../server/serverMethods.js";

const apiToken = express.Router();

//POST /api/token/refresh
apiToken.post("/refresh", verificarToken, async (request, response, next) => {
  try {
    const { token } = request.body;
    const refreshToken = await RefreshToken(token);
    methodOK(request, response, refreshToken);
  } catch (error) {
    next(error);
  }
});

export { apiToken };
