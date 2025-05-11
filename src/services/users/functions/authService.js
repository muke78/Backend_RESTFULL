import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.js";
import { createToken } from "../../../helpers/jwt.js";
import { lastLogin } from "../../../helpers/userLastLogin.js";

export const loginService = async ({ email, password }) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw { status: 404 };
  }

  const isPasswordValid = await hashedArg.verify(user.Password, password);

  if (!isPasswordValid) {
    throw {
      status: 400,
    };
  }

  if (user.AccountStatus === "Inactivo") {
    throw {
      status: 403,
    };
  }

  // Crea el token
  const token = createToken({
    id: user.ID,
    nameUser: user.NameUser,
    email: user.Email,
    profilePicture: user.ProfilePicture,
    role: user.Role,
    accountType: user.AccountType,
    lastLogin: user.LastLogin,
    accountStatus: user.AccountStatus,
  });

  await lastLogin(user.ID);

  return token;
};
