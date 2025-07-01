import { searchUserService } from "../../../services/users/index.js";

export const BusquedaDeUsuarios = async (email) => {
  const resultSearch = await searchUserService(email);
  return resultSearch;
};
