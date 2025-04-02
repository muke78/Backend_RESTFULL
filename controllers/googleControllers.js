import { jwtDecode } from "jwt-decode";

import { connectionQuery } from "../helpers/connection.helper.js";
import { createTokenGoogle } from "../helpers/jwtGoogle.js";
import { lastLogin } from "../helpers/userLastLogin.js";
import {
  methodCreated,
  methodError,
  methodForbidden,
  methodIncorrect,
  methodOK,
} from "../server/serverMethods.js";

process.loadEnvFile();

const loginGoogle = async (req, res) => {
  const { credential } = req.body;

  try {
    const { name, email, picture } = jwtDecode(credential);

    if (!name || !email || !picture) return methodIncorrect(req, res);

    // Verificar si el usuario ya existe en la base de datos
    const queryCheckUser = `SELECT * FROM users WHERE Email = ?`;
    const existingUser = await connectionQuery(queryCheckUser, [email]);

    if (existingUser.length > 0) {
      const user = existingUser[0];

      // Si el usuario ya existe con método local, no puede ingresar con Google
      if (user.AccountType === "normal") {
        return methodForbidden(
          req,
          res,
          "Este correo ya se encuentra registrado por email y contraseña normal",
        );
      }
      const token = createTokenGoogle(user);
      await lastLogin(user.ID);
      return methodOK(req, res, { token, user });
    }
    // Insertar nuevo usuario con Google
    const queryInsertByGoogle = `
    INSERT INTO users (ID, NameUser, Email, Password, ProfilePicture, AccountType) 
    VALUES (UUID(), ?, ?, NULL, ?, 'google')
  `;
    const queryParamsInsertGoogle = [name, email, picture];
    const result = await connectionQuery(
      queryInsertByGoogle,
      queryParamsInsertGoogle,
    );

    if (result.affectedRows > 0) {
      const queryGetUser = `SELECT ID, NameUser, Email, ProfilePicture, Role, AccountType FROM users WHERE Email = ?`;
      const newUser = await connectionQuery(queryGetUser, [email]);

      await lastLogin(newUser[0].ID);
      return methodCreated(req, res, newUser[0]);
    }

    return methodIncorrect(req, res);
  } catch (error) {
    methodError(req, res, error);
  }
};

export default {
  loginGoogle,
};
