import express from "express";

import GoogleControllers from "../controllers/googleControllers.js";

const apiGoogle = express.Router();

apiGoogle.post("/auth/google", GoogleControllers.loginGoogle);

export { apiGoogle };
