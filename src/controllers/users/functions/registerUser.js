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
    if (error.status === 400)
      return methodIncorrect(req, res, "Faltan campos requeridos");
    if (error.status === 409)
      return methodConflicts(req, res, "El correo ya se encuentra registrado");
    return methodError(req, res, error);
  }
};
