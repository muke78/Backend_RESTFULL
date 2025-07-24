import hashedArg from "argon2";

import { findEmailInOtherUser } from "../../../helpers/getUserByEmailAndId.helpers.js";
import {
  extractForeignKeysUserModel,
  findUserById,
  updateUser,
} from "../../../models/users/index.js";

export const updateUserService = async (
  userId,
  { name_user, email, password, role, status },
) => {
  // Verificar si otro usuario ya usa ese correo
  const [emailConflict, existingUser, extract] = await Promise.all([
    findEmailInOtherUser(email, userId),
    findUserById(userId),
    extractForeignKeysUserModel(role, status),
  ]);

  if (emailConflict) {
    throw {
      statusCode: 409,
      message: "El correo ya se encuentra registrado",
      code: "EMAIL_CONFLICT",
      details: "El correo proporcionado ya está en uso por otro usuario",
    };
  }

  // Verificar si el usuario existe
  if (!existingUser) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o el usuario no existe",
      code: "USER_NOT_FOUND",
      details: "El usuario con el ID proporcionado no fue encontrado",
    };
  }

  // Preparar datos para actualización
  const updateData = {
    name_user,
    email,
    role: extract[0].role,
    status: extract[0].status,
    userId,
  };

  // Agregar contraseña hasheada si se proporcionó
  if (password && password.trim() !== "") {
    updateData.password = await hashedArg.hash(password);
  }

  const result = await updateUser(updateData);
  return result.affectedRows > 0;
};
