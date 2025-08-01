import express from "express";

import { LoginFromGoogle } from "../controllers/users/index.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiGoogle = express.Router();

apiGoogle.post("/auth/google", async (request, response, next) => {
  try {
    const { credential } = request.body;

    const { responseData, isNewUser } = await LoginFromGoogle(credential);
    if (isNewUser) {
      methodCreated(request, response, responseData);
    } else {
      methodOK(request, response, responseData);
    }
  } catch (error) {
    next(error);
  }
});

export { apiGoogle };
