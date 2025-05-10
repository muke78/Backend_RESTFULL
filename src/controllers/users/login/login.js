import hashedArg from "argon2";

import { connectionQuery } from "../../../helpers/connection.helper.js";
import { createToken } from "../../../helpers/jwt.js";
import { lastLogin } from "../../../helpers/userLastLogin.js";
import {
  methodError,
  methodForbidden,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";

export const Login = async (req, res) => {
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
