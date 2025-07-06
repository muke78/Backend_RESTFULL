import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verificarToken = (request, response, next) => {
  const token = request.header("Authorization");

  if (!token) {
    throw {
      statusCode: 401,
      message: "Acceso no autorizado, token no proporcionado",
      code: "TOKEN_NOT_FOUND",
      details:
        "El token no se mando o no esta autorizado para realizar esta peticion",
    };
  }

  const bearerToken = token.split(" ")[1];
  if (!bearerToken) {
    throw {
      statusCode: 401,
      message: "Acceso no autorizado, token no proporcionado",
      code: "TOKEN_NOT_FOUND",
      details:
        "El token no se mando o no esta autorizado para realizar esta peticion",
    };
  }

  try {
    const secretKey = process.env.JWT_SECRET;
    const decoded = jwt.verify(bearerToken, secretKey);
    request.usuario = decoded;
    next();
  } catch (error) {
    throw {
      statusCode: 401,
      message: "Acceso no autorizado: token inválido",
      code: "TOKEN_INVALID",
      details: error.message || "El token no pudo ser verificado",
    };
  }
};
