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

// const ObtenerTodosLosUsuarios = async (req, res) => {
//   try {
//     // Tomar parámetros de paginación
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 7;
//     const offset = (page - 1) * limit;

//     // Consulta paginada
//     const obtenerUsuarios = `
//       SELECT * FROM users ORDER BY NameUser ASC LIMIT ? OFFSET ?;
//     `;
//     const totalUsuarios = `SELECT COUNT(*) AS total FROM users;`;

//     const [result, countResult] = await Promise.all([
//       connectionQuery(obtenerUsuarios, [limit, offset]),
//       connectionQuery(totalUsuarios),
//     ]);

//     const total = countResult[0].total;

//     if (result.length === 0) return methodNotFound(req, res);

//     // Puedes devolver los datos junto a un `metadata`
//     res.status(200).json({
//       success: true,
//       data: result,
//       message: "Consulta realizada correctamente",
//       metadata: {
//         currentPage: page,
//         pageSize: limit,
//         totalPages: Math.ceil(total / limit),
//         dataCount: total
//       },
//     });
//   } catch (error) {
//     methodError(req, res, error);
//   }
// };

const InsertarUsario = async (req, res) => {
  try {
    const { nameUser, email, password } = req.body;

    if (!nameUser || !email || !password) return methodIncorrect(req, res);

    const queryValidate = `SELECT AccountType FROM users WHERE Email = ?`;
    const resultValidate = await connectionQuery(queryValidate, [email]);

    if (resultValidate.length > 0)
      return methodError(req, res, {
        message: "El correo ya se encuentra registrado",
      });

    // Hashear la contraseña
    const hashedPasword = await hashedArg.hash(password);
    const queryInsert = `
    INSERT INTO users (ID, NameUser, Email, Password, Role, AccountType, LastLogin) 
    VALUES (UUID(), ?, ?, ?, 'user', 'normal', NULL)
  `;
    const queryParamsInsert = [nameUser, email, hashedPasword];
    const result = await connectionQuery(queryInsert, queryParamsInsert);

    await insertTeacherBeforeUser(email);

    // Verificar si se insertó correctamente
    if (result.affectedRows > 0) {
      const queryGetUser = `SELECT NameUser, Email, Role, AccountStatus FROM users WHERE Email = ?`;
      const newUser = await connectionQuery(queryGetUser, [email]);

      return methodCreated(req, res, newUser[0]);
    }
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

    if (user.AccountStatus === "Inactivo") {
      return methodForbidden(
        req,
        res,
        "El usuario está inactivo, pida la reactivación a un administrador",
      );
    }

    // Crea el token
    const token = createToken({
      id: user.ID,
      nameUser: user.NameUser,
      email: user.Email,
      profilePicture: user.ProfilePicture,
      role: user.Role,
      accountType: user.AccountType,
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
