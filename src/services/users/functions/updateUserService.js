import hashedArg from "argon2";

import { findEmailInOtherUser } from "../../../helpers/getUserByEmailAndId.js";
import {
  findUserById,
  updateUserWithPassword,
  updateUserWithoutPassword,
} from "../../../models/users/index.js";

export const updateUserService = async ({
  nameUser,
  email,
  password,
  role,
  accountStatus,
  id,
}) => {
  // Verificar si otro usuario ya usa ese correo
  const emailConflict = await findEmailInOtherUser(email, id);
  if (emailConflict) {
    throw { status: 409 };
  }

  // Verificar si el usuario existe
  const existingUser = await findUserById(id);
  if (!existingUser) {
    throw {
      status: 404,
    };
  }

  // Determinar si se actualiza con o sin contraseña
  let result;
  if (password && password.trim() !== "") {
    const hashedPassword = await hashedArg.hash(password);
    result = await updateUserWithPassword({
      nameUser,
      email,
      password: hashedPassword,
      role,
      accountStatus,
      id,
    });
  } else {
    result = await updateUserWithoutPassword({
      nameUser,
      email,
      role,
      accountStatus,
      id,
    });
  }

  return result.affectedRows > 0;
};
