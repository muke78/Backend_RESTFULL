import { updateUserService } from "../../../services/users/index.js";

export const EditarUsuario = async (userId, userData) => {
  const actualizado = await updateUserService(userId, userData);
  return actualizado;
};
