import {
  methodConflicts,
  methodCreated,
  methodError,
  methodIncorrect,
} from "../../../server/serverMethods.js";
import {
  insertUserMasiveService,
  insertUserService,
} from "../../../services/users/index.js";

export const InsertarUsario = async (req, res) => {
  try {
    const newuser = await insertUserService(req.body);
    return methodCreated(req, res, newuser);
  } catch (error) {
    if (error.status === 400)
      return methodIncorrect(req, res, "Faltan campos requeridos");
    if (error.status === 409)
      return methodConflicts(req, res, {
        message: "El correo ya se encuentra registrado",
      });
    return methodError(req, res, { message: error });
  }
};

export const InsertarUsuariosRunnerMasive = async (req, res) => {
  try {
    const newUserMasive = await insertUserMasiveService(req.body);

    return methodCreated(
      req,
      res,
      `Se insertaron correctamente ${newUserMasive.length} usuarios como prueba`,
    );
  } catch (error) {
    if (error.status === 400)
      return methodIncorrect(req, res, "Faltan campos requeridos");
    if (error.status === 409)
      return methodConflicts(req, res, {
        message: "El correo ya se encuentra registrado",
      });
    return methodError(req, res, { message: error });
  }
};
