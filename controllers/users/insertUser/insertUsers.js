import { faker } from "@faker-js/faker";
import hashedArg from "argon2";

import { connectionQuery } from "../../../helpers/connection.helper.js";
import {
  methodConflicts,
  methodCreated,
  methodError,
  methodIncorrect,
} from "../../../server/serverMethods.js";

export const InsertarUsario = async (req, res) => {
  try {
    const { nameUser, email, password, accountStatus, role } = req.body;

    if (!nameUser || !email || !password || !accountStatus || !role)
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
      VALUES (UUID(), ?, ?, ?, ?, "normal", ?, NULL)
    `;
    const queryParamsInsert = [
      nameUser,
      email,
      hashedPasword,
      role,
      accountStatus,
    ];
    const result = await connectionQuery(queryInsert, queryParamsInsert);

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

export const InsertarUsuariosRunnerMasive = async (req, res) => {
  try {
    const { countInsert } = req.body;

    if (!countInsert || isNaN(countInsert))
      return methodIncorrect(
        req,
        res,
        "countInsert es requerido y debe ser un número.",
      );

    const insertados = [];

    for (let i = 0; i < countInsert; i++) {
      const nameUser = faker.internet.username();
      const email = faker.internet.email();
      const password = faker.internet.password();
      const role = "user";
      const accountStatus = "Inactivo";

      // Validar si el correo ya existe
      const [existingUser] = await connectionQuery(
        `SELECT ID FROM users WHERE Email = ?`,
        [email],
      );

      if (existingUser)
        return methodConflicts(req, res, {
          message: "El correo ya se encuentra registrado",
        });

      const hashedPasword = await hashedArg.hash(password);
      const queryInsert = `
          INSERT INTO users (ID, NameUser, Email, Password, Role, AccountType, AccountStatus, LastLogin) 
          VALUES (UUID(), ?, ?, ?, ?, "normal", ?, NULL)
        `;
      const result = await connectionQuery(queryInsert, [
        nameUser,
        email,
        hashedPasword,
        role,
        accountStatus,
      ]);

      if (result.affectedRows > 0) {
        insertados.push({ nameUser, email, role, accountStatus });
      }
    }
    return methodCreated(
      req,
      res,
      `Se insertaron correctamente ${insertados.length} usuarios como prueba`,
    );
  } catch (error) {
    methodError(req, res, error);
  }
};
