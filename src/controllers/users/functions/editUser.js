import {
  methodConflicts,
  methodError,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";
import { updateUserService } from "../../../services/users/index.js";

export const EditarUsuario = async (req, res) => {
  try {
    const actualizado = await updateUserService(req.body);

    if (actualizado) {
      return methodOK(req, res, {
        message: "El recurso fue actualizado correctamente.",
      });
    } else {
      return methodNotFound(req, res, {
        message: "No se encontró el recurso para actualizar.",
      });
    }
  } catch (error) {
    if (error.status === 409)
      return methodConflicts(req, res, {
        message: "El correo ya existe y no se puede actualizar",
      });
    if (error.status === 404)
      return methodNotFound(
        req,
        res,
        "No se proporcionó un ID válido o el usuario no existe",
      );
    return methodError(req, res, { message: error });
  }
};
