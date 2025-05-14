import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.js";
import { createToken } from "../../../helpers/jwt.js";
import { lastLogin } from "../../../helpers/userLastLogin.js";

export const loginService = async ({ email, password }) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw { status: 404, message: "El usuario no ha podidio ser encontrado" };
  }

  if (user.AccountType === "google") {
    throw { status: 400, message: "El correo ya esta registrado con google" };
  }

  const isPasswordValid = await hashedArg.verify(user.Password, password);

  if (!isPasswordValid) {
    throw {
      status: 400,
      message: "La contraseña es incorrecta o está mal escrita",
    };
  }

  if (user.AccountStatus === "Inactivo") {
    throw {
      status: 403,
      message:
        "El usuario está inactivo, pida la reactivación a un administrador",
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
