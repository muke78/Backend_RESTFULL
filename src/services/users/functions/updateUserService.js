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
    throw {
      status: 409,
      message: "El correo ya existe y no se puede actualizar",
    };
  }

  // Verificar si el usuario existe
  const existingUser = await findUserById(id);
  if (!existingUser) {
    throw {
      status: 404,
      message: "No se proporcionó un ID válido o el usuario no existe",
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
