import hashedArg from "argon2";

import { connectionQuery } from "../helpers/connection.helper.js";
import { deleteTeacherByUser } from "../helpers/deleteTeacherByUser.js";
import { insertTeacherBeforeUser } from "../helpers/insertTeacherWithUser.js";
import { createToken } from "../helpers/jwt.js";
import { lastLogin } from "../helpers/userLastLogin.js";
import {
  methodCreated,
  methodError,
  methodForbidden,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../server/serverMethods.js";

const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    const obtenerUsuarios = `SELECT * FROM users ORDER BY NameUser ASC;`;
    const result = await connectionQuery(obtenerUsuarios);

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const InsertarUsario = async (req, res) => {
  try {
    const { nameUser, email, password, role } = req.body;

    if (!nameUser || !email || !password || !role)
      return methodIncorrect(req, res);

    const queryValidate = `SELECT * FROM users WHERE Email = ?`;
    const queryParamsValidate = [email];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate,
    );

    if (resultValidate.length > 0)
      return methodError(req, res, {
        message: "El correo ya se encuentra registrado",
      });

    const hashedPasword = await hashedArg.hash(password);
    const queryInsert = `INSERT INTO users (ID, NameUser, Email, Password, Role, LastLogin) VALUES (UUID(), ?, ?, ?, ?, NULL)`;
    const queryParamsInsert = [nameUser, email, hashedPasword, role];
    const result = await connectionQuery(queryInsert, queryParamsInsert);

    await insertTeacherBeforeUser(email);

    if (result.affectedRows > 0)
      return methodCreated(req, res, queryParamsInsert);
  } catch (error) {
    methodError(req, res, error);
  }
};

const EditarUsuario = async (req, res) => {
  try {
    const { nameUser, email, password, role, accountStatus, id } = req.body;

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

    const hashedPasswordUpdate = await hashedArg.hash(password);
    const queryUpdate = `UPDATE users SET NameUser = ?, Email = ?, Password = '${hashedPasswordUpdate}', Role = ?, AccountStatus = ?  WHERE ID = ?`;
    const queryParamsUpdate = [nameUser, email, role, accountStatus, id];

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

const EliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    if (id) {
      const queryValidate = `SELECT * FROM users WHERE id = ?`;
      const queryParamsValidate = [id];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate,
      );

      if (resultValidate.length === 0) return methodNotFound(req, res);
    }
    const queryDelete = `DELETE FROM users WHERE id = ?`;
    const result = await connectionQuery(queryDelete, [id]);

    await deleteTeacherByUser(id);

    if (result.affectedRows > 0) {
      methodOK(req, res, {
        message: "El recurso fue eliminado correctamente.",
      });
    } else {
      methodNotFound(req, res);
    }
  } catch (error) {
    methodError(req, res, error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const queryValidate = `SELECT * FROM users WHERE Email = ?`;
    const queryParamsValidate = [email];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate,
    );

    if (resultValidate.length === 0) return methodNotFound(req, res);

    const user = resultValidate[0];

    const argonVerify = await hashedArg.verify(user.Password, password);

    if (!argonVerify)
      return methodError(req, res, {
        message: "La contraseña es incorrecta o está mal escrita",
      });

    if (user.AccountStatus === "Inactivo")
      return methodForbidden(req, res, {
        message:
          "El usuario está inactivo, pida la reactivación a un administrador",
      });

    // Crea el token
    const token = createToken({
      id: user.ID,
      nameUser: user.NameUser,
      email: user.Email,
      role: user.Role,
      lastLogin: user.LastLogin,
      accountStatus: user.AccountStatus,
    });

    await lastLogin(user.ID);

    methodOK(req, res, token);
  } catch (error) {
    methodError(req, res, error);
  }
};

export default {
  ObtenerTodosLosUsuarios,
  InsertarUsario,
  EditarUsuario,
  EliminarUsuario,
  Login,
};
