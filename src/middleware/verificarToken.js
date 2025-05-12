import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { methodUnauthorized } from "../server/serverMethods.js";

dotenv.config();

const verificarToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return methodUnauthorized(
      req,
      res,
      "Acceso no autorizado. Token no proporcionado.",
    );
  }

  const bearerToken = token.split(" ")[1];
  if (!bearerToken) {
    return methodUnauthorized(
      req,
      res,
      "Acceso no autorizado. Token no proporcionado.",
    );
  }

  try {
    const secretKey = process.env.JWT_SECRET;
    const decoded = jwt.verify(bearerToken, secretKey);
    req.usuario = decoded;
    next();
  } catch (error) {
    return methodUnauthorized(
      req,
      res,
      `Acceso no autorizado. Token inválido ${error}`,
    );
  }
};

export { verificarToken };
