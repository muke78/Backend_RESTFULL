import crypto from "node:crypto";

import { connectionQuery } from "../helpers/connection.helper.js";
import { createTokenGoogle } from "../helpers/jwtGoogle.js";
import { lastLogin } from "../helpers/userLastLogin.js";
import { googleClient } from "../lib/clientGoogle.js";
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

  if (!credential) {
    return methodIncorrect(req, res, "ID Token no proporcionado");
  }

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.CLIENT_ID_GOOGLE,
    });

    const payload = ticket.getPayload();

    // Extraer datos del payload verificado
    const googleId = payload["sub"];
    const email = payload["email"];
    const name = payload["name"];
    const picture = payload["picture"];

    if (!googleId || !email) {
      // El token es válido pero falta info crucial, caso raro pero posible
      return methodIncorrect(
        req,
        res,
        "Información esencial del usuario de Google no encontrada",
      );
    }

    const queryCheckUser = `SELECT * FROM users WHERE Email = ?`;
    const existingUsers = await connectionQuery(queryCheckUser, [email]);

    // Variable para almacenar el usuario encontrado o creado
    let user = null;
    let isNewUser = false;

    if (existingUsers.length > 0) {
      user = existingUsers[0];

      // Si el usuario ya existe con método local ('normal'), no puede ingresar con Google
      if (user.AccountType === "normal") {
        return methodForbidden(
          req,
          res,
          "Este correo ya se encuentra registrado por email y contraseña normal",
        );
      }
    } else {
      // Si el usuario NO existe en la base de datos, lo creamos
      isNewUser = true;
      const newUserId = crypto.randomUUID();

      const queryInsertByGoogle = `
      INSERT INTO users (ID, NameUser, Email, Password, ProfilePicture, AccountType, AccountStatus)
      VALUES (?, ?, ?, NULL, ?, 'google', 'Inactivo')`;
      const queryParamsInsertGoogle = [newUserId, name, email, picture];

      const result = await connectionQuery(
        queryInsertByGoogle,
        queryParamsInsertGoogle,
      );

      if (result.affectedRows === 0) {
        // Esto no debería pasar si no hubo error, pero es una verificación de seguridad
        return methodError(
          req,
          res,
          "Error al crear el nuevo usuario de google en la base de datos.",
        );
      }

      // Recuperar los datos completos del usuario recién creado (incluyendo Role por defecto, etc.)
      const queryGetUser = `SELECT ID, NameUser, Email, ProfilePicture, Role, AccountType, AccountStatus FROM users WHERE ID = ?`;
      const newUserRows = await connectionQuery(queryGetUser, [newUserId]);
      if (newUserRows.length === 0) {
        // Error crítico si no se encuentra el usuario recién insertado
        return methodError(
          req,
          res,
          "Error interno: No se pudo recuperar el usuario recién creado.",
        );
      }
      user = newUserRows[0];
    }

    if (user.AccountStatus === "Inactivo") {
      return methodForbidden(
        req,
        res,
        "El usuario está inactivo, pida la reactivación a un administrador",
      );
    }

    // Generar el token de tu aplicación (JWT) para el usuario identificado/creado
    const appToken = createTokenGoogle(user);
    // Actualizar la fecha de último login
    await lastLogin(user.ID);

    // Enviar respuesta exitosa al frontend
    const responseData = {
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
    };

    if (isNewUser) {
      return methodCreated(req, res, responseData);
    } else {
      return methodOK(req, res, responseData);
    }
  } catch (error) {
    // Manejar errores, especialmente errores de verificación del token de Google
    console.error("Error en loginGoogle:", error);
    if (error.message && error.message.includes("Invalid token")) {
      return methodIncorrect(
        req,
        res,
        "ID Token de Google inválido o expirado.",
      );
    }
    methodError(req, res, error); // Manejador de error genérico
  }
};

export default {
  loginGoogle,
};
