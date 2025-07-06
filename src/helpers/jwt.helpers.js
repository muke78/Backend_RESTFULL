import { addDay, addHour } from "@formkit/tempo";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secret = process.env.JWT_SECRET;

export const createToken = (user) => {
  // Duracion de 2 minutos para probar que el toke se expire correctamente
  // const expirationDate = addMinute(new Date(), 2);

  const expirationDate = addHour(new Date(), 12);

  const expirationTime = Math.floor(expirationDate.getTime() / 1000);

  const payload = {
    id: user.id,
    nameUser: user.nameUser,
    email: user.email,
    profilePicture: user.profilePicture,
    role: user.role,
    accountType: user.accountType,
    lastLogin: user.lastLogin,
    accountStatus: user.accountStatus,
    iat: Math.floor(Date.now() / 1000),
    exp: expirationTime,
  };
  return jwt.sign(payload, secret);
};

export const refreshToken = (token) => {
  const decoded = jwt.verify(token, secret);

  if (decoded.accountStatus === "Inactivo") {
    throw {
      statusCode: 403,
      message: "Cuenta inactiva, porfavor contacta al administrador.",
      code: "ACCOUNT_INACTIVE",
      details:
        "La cuenta esta desactivada, no se puede generar un nuevo token.",
    };
  }

  const expirationDate = addDay(new Date(), 20);

  const expirationTime = Math.floor(expirationDate.getTime() / 1000);

  const payload = {
    id: decoded.id,
    nameUser: decoded.nameUser,
    email: decoded.email,
    profilePicture: decoded.profilePicture,
    role: decoded.role,
    accountType: decoded.accountType,
    lastLogin: decoded.lastLogin,
    accountStatus: decoded.accountStatus,
    iat: Math.floor(Date.now() / 1000),
    exp: expirationTime,
  };
  return jwt.sign(payload, secret);
};
