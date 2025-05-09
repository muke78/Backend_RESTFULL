import hashedArg from "argon2";

import { connectionQuery } from "../../../helpers/connection.helper.js";
import {
  methodConflicts,
  methodError,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";

export const EditarUsuario = async (req, res) => {
  try {
    const { nameUser, email, password, role, accountStatus, id } = req.body;

    const [existingUser] = await connectionQuery(
      `SELECT id FROM users WHERE Email = ? AND ID != ?`,
      [email, id],
    );

    if (existingUser)
      return methodConflicts(req, res, {
        message: "El correo ya existe y no se puede actualizar ",
      });

    if (id) {
      const queryValidateUpdate = `SELECT * FROM users WHERE ID = ?`;
      const queryParamsValidUpdate = [id];
      const resultValidUpdate = await connectionQuery(
        queryValidateUpdate,
        queryParamsValidUpdate,
      );

      if (resultValidUpdate.length === 0) {
        return res.status(404).json({
          message: "No se proporciono un id valido o el usuario no existe",
        });
      }
    }

    // Modificación principal: manejo condicional de la contraseña
    let queryUpdate, queryParamsUpdate;

    if (password && password.trim() !== "") {
      // Si se proporciona una nueva contraseña, hash y actualiza todos los campos
      const hashedPasswordUpdate = await hashedArg.hash(password);
      queryUpdate = `UPDATE users SET NameUser = ?, Email = ?, Password = ?, Role = ?, AccountStatus = ? WHERE ID = ?`;
      queryParamsUpdate = [
        nameUser,
        email,
        hashedPasswordUpdate,
        role,
        accountStatus,
        id,
      ];
    } else {
      // Si no se proporciona contraseña, actualiza todos los campos excepto la contraseña
      queryUpdate = `UPDATE users SET NameUser = ?, Email = ?, Role = ?, AccountStatus = ? WHERE ID = ?`;
      queryParamsUpdate = [nameUser, email, role, accountStatus, id];
    }

    const result = await connectionQuery(queryUpdate, queryParamsUpdate);

    if (result.affectedRows > 0) {
      methodOK(req, res, {
        message: "El recurso fue actualizado correctamente.",
      });
    } else {
      methodNotFound(req, res, {
        message: "No se encontró el recurso para actualizar.",
      });
    }
  } catch (error) {
    methodError(req, res, error);
  }
};
