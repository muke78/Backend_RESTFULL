import { listUsersService } from "../../../services/users/index.js";

export const ObtenerTodosLosUsuarios = async (listUsers) => {
  const result = await listUsersService(listUsers);
  return result;
};
