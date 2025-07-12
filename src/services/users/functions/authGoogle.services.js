import crypto from "node:crypto";

import { config } from "../../../config/config.js";
import { createTokenGoogle } from "../../../helpers/jwtGoogle.helpers.js";
import { lastLogin } from "../../../helpers/userLastLogin.helpers.js";
import { googleClient } from "../../../lib/clientGoogle.lib.js";
import {
  checkUser,
  createUser,
  getRecoveryUserById,
} from "../../../models/users/index.js";

export const loginGoogleService = async (credential) => {
  if (!credential) {
    throw {
      statusCode: 400,
      message: "ID Token no proporcionado",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para loguarse con Google",
    };
  }

  const ticket = await googleClient.verifyIdToken({
    idToken: credential,
    audience: config.authGoogle.client_google,
  });

  const payload = ticket.getPayload();

  // Extraer datos del payload verificado
  const googleId = payload["sub"];
  const email = payload["email"];
  const name = payload["name"];
  const picture = payload["picture"];

  if (!googleId || !email) {
    // El token es válido pero falta info crucial, caso raro pero posible
    throw {
      statusCode: 400,
      message: "Información esencial del usuario de Google no encontrada",
      code: "GOOGLE_USER_INFO_MISSING",
      details: "El token de Google es valido pero falta informacion escencial",
    };
  }

  const queryCheckUser = await checkUser(email);

  // Variable para almacenar el usuario encontrado o creado
  let user = null;
  let isNewUser = false;

  if (queryCheckUser.length > 0) {
    user = queryCheckUser[0];

    // Si el usuario ya existe con método local ('normal'), no puede ingresar con Google
    if (user.AccountType === "normal") {
      throw {
        statusCode: 403,
        message: "No se puede iniciar sesion con Google",
        code: "GOOGLE_LOGIN_FORBIDDEN",
        details:
          "Este correo ya se encuentra registrado por email y contraseña normal",
      };
    }
  } else {
    // Si el usuario NO existe en la base de datos, lo creamos
    isNewUser = true;
    const newUserId = crypto.randomUUID();

    const queryCreateUser = await createUser(newUserId, name, email, picture);

    if (queryCreateUser.affectedRows === 0) {
      // Esto no debería pasar si no hubo error, pero es una verificación de seguridad
      throw {
        statusCode: 500,
        message: "Error al crear el usuario",
        code: "USER_CREATION_ERROR",
        details: "No se pudo crear el usuario con los datos proporcionados",
      };
    }

    // Recuperar los datos completos del usuario recién creado (incluyendo Role por defecto, etc.)
    const queryGetUser = await getRecoveryUserById(newUserId);
    if (queryGetUser.length === 0) {
      // Error crítico si no se encuentra el usuario recién insertado
      throw {
        statusCode: 500,
        message: "Error interno al recuperar el usuario recien creado",
        code: "USER_RECOVERY_ERROR",
        details: "No se pudo recuperar el usuario recien creado",
      };
    }
    user = newUserRows[0];
  }

  if (user.AccountStatus === "Inactivo") {
    throw {
      statusCode: 403,
      message: "Cuenta inactiva",
      code: "ACCOUNT_INACTIVE",
      details: "Tu cuenta esta inactiva. Porfavor, contacta al administrador.",
    };
  }

  // Generar el token de tu aplicación (JWT) para el usuario identificado/creado
  const appToken = createTokenGoogle(user);
  // Actualizar la fecha de último login
  await lastLogin(user.ID);
  // Enviar respuesta exitosa al frontend
  return {
    responseData: {
      token: appToken,
      user: {
        ID: user.ID,
        NameUser: user.NameUser,
        Email: user.Email,
        ProfilePicture: user.ProfilePicture,
        Role: user.Role,
        AccountType: user.AccountType,
        AccountStatus: user.AccountStatus,
      },
    },
    isNewUser,
  };
};
