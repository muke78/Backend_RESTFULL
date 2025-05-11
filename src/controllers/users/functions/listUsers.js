import {
  methodError,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";
import { listUsersService } from "../../../services/users/index.js";

export const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    const result = await listUsersService(req.params, req.query);

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};
