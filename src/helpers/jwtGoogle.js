import { addHour } from "@formkit/tempo";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secret = process.env.JWT_SECRET;

export const createTokenGoogle = (user) => {
  // Duracion de 2 minutos para probar que el toke se expire correctamente
  // const expirationDate = addMinute(new Date(), 2);

  const expirationDate = addHour(new Date(), 12);

  const expirationTime = Math.floor(expirationDate.getTime() / 1000);

  const payload = {
    id: user.ID,
    nameUser: user.NameUser,
    email: user.email,
    profilePicture: user.ProfilePicture,
    role: user.Role,
    accountType: user.AccountType,
    lastLogin: user.LastLogin,
    accountStatus: user.AccountStatus,
    iat: Math.floor(Date.now() / 1000),
    exp: expirationTime,
  };
  return jwt.sign(payload, secret);
};
