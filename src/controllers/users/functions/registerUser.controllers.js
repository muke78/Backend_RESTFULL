import { registerUserService } from "../../../services/users/index.js";

export const RegistrarUsuario = async (register) => {
  const newUser = await registerUserService(register);
  return newUser;
};
