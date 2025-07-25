import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.helpers.js";
import { createToken } from "../../../helpers/jwt.helpers.js";
import { lastLogin } from "../../../helpers/userLastLogin.helpers.js";

export const loginService = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw {
      statusCode: 404,
      message: "El usuario no ha podidio ser encontrado",
      code: "USER_NOT_FOUND",
      details: "No se encontró un usuario con ese correo electrónico",
    };
  }

  if (user.AccountType === "google") {
    throw {
      statusCode: 409,
      message: "El correo ya esta registrado con google",
      code: "GOOGLE_ACCOUNT",
      details: "El usuario ya se ha registrado con una cuenta de Google",
    };
  }

  const isPasswordValid = await hashedArg.verify(user.password, password);

  if (!isPasswordValid) {
    throw {
      statusCode: 400,
      message: "La contraseña es incorrecta o está mal escrita",
      code: "INCORRECT_PASSWORD",
      details: "La contraseña proporcionada no coincide con la registrada",
    };
  }

  if (user.AccountStatus === "Inactivo") {
    throw {
      statusCode: 403,
      message:
        "El usuario está inactivo, pida la reactivación a un administrador",
      code: "USER_INACTIVE",
      details:
        "El usuario no puede iniciar sesión porque su cuenta está inactiva",
    };
  }
  // Crea el token
  const token = createToken({
    user_id: user.user_id,
    role_id: user.role_id,
  });

  await lastLogin(user.user_id);

  return token;
};
