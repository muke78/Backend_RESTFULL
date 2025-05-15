import {
  methodConflicts,
  methodCreated,
  methodError,
  methodIncorrect,
} from "../../../server/serverMethods.js";
import { registerUserService } from "../../../services/users/index.js";

export const RegistrarUsuario = async (req, res) => {
  try {
    const newUser = await registerUserService(req.body);
    return methodCreated(req, res, newUser);
  } catch (error) {
    if (error.status === 400) return methodIncorrect(req, res, error.message);
    if (error.status === 409)
      return methodConflicts(req, res, { message: error.message });
    return methodError(req, res, { message: error });
  }
};
