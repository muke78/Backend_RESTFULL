import { de } from "@faker-js/faker";
import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.js";
import { registerUser } from "../../../models/users/functions/registerUserModel.js";

export const registerUserService = async ({ nameUser, email, password }) => {
  if (!nameUser || !email || !password) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un usuario",
    };
  }

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw {
      status: 409,
      message: "El correo ya se encuentra registrado",
      code: "EMAIL_CONFLICT",
      details: "El correo proporcionado ya está en uso por otro usuario",
    };
  }

  const hashedPassword = await hashedArg.hash(password);
  const insertResult = await registerUser(nameUser, email, hashedPassword);

  if (insertResult.affectedRows > 0) {
    const newUser = await getUserByEmail(email);
    return newUser;
  } else {
    throw {
      status: 500,
      message: "Error al registrar el usuario",
      code: "REGISTRATION_ERROR",
      details: "No se pudo completar el registro del usuario",
    };
  }
};
