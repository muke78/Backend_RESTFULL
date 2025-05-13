import {
  methodError,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";
import {
  deleteUserBulkService,
  deleteUserService,
} from "../../../services/users/index.js";

export const EliminarUsuario = async (req, res) => {
  try {
    const deletedUser = await deleteUserService(req.params);
    methodOK(req, res, {
      message: `El usuario ${deletedUser.NameUser} fue eliminado correctamente`,
    });
  } catch (error) {
    if (error.status === 400)
      return methodIncorrect(req, res, "Faltan campos requeridos");
    if (error.status === 404)
      return methodNotFound(
        req,
        res,
        "No se encontro el id del usuario que se quiere eliminar",
      );
    return methodError(req, res, { message: error });
  }
};

export const DeleteUserBulk = async (req, res) => {
  try {
    await deleteUserBulkService(req.body);

    methodOK(req, res, {
      message: `Se eliminaron ${req.body.ids.length} usuarios correctamente`,
    });
  } catch (error) {
    if (error.status === 400)
      return methodIncorrect(req, res, "Faltan campos requeridos");
    return methodError(req, res, { message: error });
  }
};
