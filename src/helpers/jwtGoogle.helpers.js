import jwt from "jsonwebtoken";

import { config } from "../config/config.js";

export const createTokenGoogle = (user) => {
  const payload = {
    id: user.ID,
    nameUser: user.NameUser,
    email: user.email,
    profilePicture: user.ProfilePicture,
    role: user.Role,
    accountType: user.AccountType,
    lastLogin: user.LastLogin,
    accountStatus: user.AccountStatus,
  };

  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};
