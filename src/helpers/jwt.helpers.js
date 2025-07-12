import jwt from "jsonwebtoken";

import { config } from "../config/config.js";

export const createToken = (user) => {
  const payload = {
    id: user.id,
    nameUser: user.nameUser,
    email: user.email,
    profilePicture: user.profilePicture,
    role: user.role,
    accountType: user.accountType,
    lastLogin: user.lastLogin,
    accountStatus: user.accountStatus,
  };
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

export const refreshToken = (token) => {
  const decoded = jwt.verify(token, config.jwt.secret);

  if (decoded.accountStatus === "Inactivo") {
    throw {
      statusCode: 403,
      message: "Cuenta inactiva, porfavor contacta al administrador.",
      code: "ACCOUNT_INACTIVE",
      details:
        "La cuenta esta desactivada, no se puede generar un nuevo token.",
    };
  }

  const payload = {
    id: decoded.id,
    nameUser: decoded.nameUser,
    email: decoded.email,
    profilePicture: decoded.profilePicture,
    role: decoded.role,
    accountType: decoded.accountType,
    lastLogin: decoded.lastLogin,
    accountStatus: decoded.accountStatus,
  };
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};
