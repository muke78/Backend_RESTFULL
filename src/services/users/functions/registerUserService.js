import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.js";
import { registerUser } from "../../../models/users/functions/registerUserModel.js";

export const registerUserService = async ({ nameUser, email, password }) => {
  if (!nameUser || !email || !password) {
    throw { status: 400, message: "Faltan campos por completar" };
  }

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw { status: 409, message: "El correo ya se encuentra registrado" };
  }

  const hashedPassword = await hashedArg.hash(password);
  const insertResult = await registerUser(nameUser, email, hashedPassword);

  if (insertResult.affectedRows > 0) {
    const newUser = await getUserByEmail(email);
    return newUser;
  } else {
    throw { status: 500 };
  }
};
