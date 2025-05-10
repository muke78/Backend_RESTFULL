import {
  methodError,
  methodForbidden,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";
import { loginService } from "../../../services/users/functions/auth.service.js";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    methodOK(req, res, token);
  } catch (error) {
    if (error.status === 404)
      return methodNotFound(req, res, "Usuario no encontrado");
    if (error.status === 403)
      return methodForbidden(
        req,
        res,
        "El usuario está inactivo, pida la reactivación a un administrador",
      );
    if (error.status === 400)
      return methodIncorrect(
        req,
        res,
        "La contraseña es incorrecta o está mal escrita",
      );

    methodError(req, res, error);
  }
};
