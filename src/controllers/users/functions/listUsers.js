import {
  methodError,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";
import { listUsersService } from "../../../services/users/index.js";

export const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    const result = await listUsersService(req.params, req.query);

    methodOK(req, res, result);
  } catch (error) {
    if (error.status === 400) return methodNotFound(req, res);
    return methodError(req, res, error);
  }
};
