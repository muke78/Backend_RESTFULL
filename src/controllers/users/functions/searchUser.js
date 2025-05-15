import {
  methodError,
  methodIncorrect,
  methodOK,
} from "../../../server/serverMethods.js";
import { searchUserService } from "../../../services/users/index.js";

export const BusquedaDeUsuarios = async (req, res) => {
  try {
    const resultSearch = await searchUserService(req.params);

    methodOK(req, res, resultSearch);
  } catch (error) {
    console.log(error);
    if (error.status === 400) return methodIncorrect(req, res, error.message);
    return methodError(req, res, { message: error });
  }
};
