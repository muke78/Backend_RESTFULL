import hashedArg from "argon2";

import { findEmailInOtherUser } from "../../../helpers/getUserByEmailAndId.helpers.js";
import {
  findUserById,
  updateUserWithPassword,
  updateUserWithoutPassword,
} from "../../../models/users/index.js";

export const updateUserService = async (
  userId,
  { nameUser, email, password, role, accountStatus },
) => {
  // Verificar si otro usuario ya usa ese correo
  const emailConflict = await findEmailInOtherUser(email, userId);
  if (emailConflict) {
    throw {
      status: 409,
      message: "El correo ya se encuentra registrado",
      code: "EMAIL_CONFLICT",
      details: "El correo proporcionado ya está en uso por otro usuario",
    };
  }

  // Verificar si el usuario existe
  const existingUser = await findUserById(userId);
  if (!existingUser) {
    throw {
      status: 404,
      message: "No se proporcionó un ID válido o el usuario no existe",
      code: "USER_NOT_FOUND",
      details: "El usuario con el ID proporcionado no fue encontrado",
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
      userId,
    });
  } else {
    result = await updateUserWithoutPassword(
      nameUser,
      email,
      role,
      accountStatus,
      userId,
    );
  }

  return result.affectedRows > 0;
};
