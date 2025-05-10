import hashedArg from "argon2";

import { connectionQuery } from "../../../helpers/connection.helper.js";
import {
  methodConflicts,
  methodCreated,
  methodError,
  methodIncorrect,
} from "../../../server/serverMethods.js";

export const RegistrarUsuario = async (req, res) => {
  try {
    const { nameUser, email, password, role } = req.body;

    if (!nameUser || !email || !password || !role)
      return methodIncorrect(req, res);

    const [existingUser] = await connectionQuery(
      `SELECT AccountType FROM users WHERE Email = ?`,
      [email],
    );

    if (existingUser)
      return methodConflicts(req, res, {
        message: "El correo ya se encuentra registrado",
      });

    // Hashear la contraseña
    const hashedPasword = await hashedArg.hash(password);
    const queryInsert = `
    INSERT INTO users (ID, NameUser, Email, Password, Role, AccountType, AccountStatus, LastLogin) 
    VALUES (UUID(), ?, ?, ?, ?, "normal", "Inactivo", NULL)
  `;
    const queryParamsInsert = [nameUser, email, hashedPasword, role];
    const result = await connectionQuery(queryInsert, queryParamsInsert);

    // await insertTeacherBeforeUser(email);

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
