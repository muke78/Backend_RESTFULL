import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.js";
import { registerUser } from "../../../models/users/functions/registerUserModel.js";

export const registerUserService = async ({
  nameUser,
  email,
  password,
  role,
}) => {
  if (!nameUser || !email || !password || !role) {
    throw { status: 400 };
  }

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw { status: 409 };
  }

  const hashedPassword = await hashedArg.hash(password);
  const insertResult = await registerUser(
    nameUser,
    email,
    hashedPassword,
    role,
  );

  if (insertResult.affectedRows > 0) {
    const newUser = await getUserByEmail(email);
    return newUser;
  } else {
    throw { status: 500 };
  }
};
