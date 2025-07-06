import { faker } from "@faker-js/faker";
import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.helpers.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.helpers.js";
import { insertUser } from "../../../models/users/index.js";

export const insertUserService = async ({
  nameUser,
  email,
  password,
  accountStatus,
  role,
}) => {
  if (!nameUser || !email || !password || !accountStatus || !role) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un usuario",
    };
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw {
      statusCode: 409,
      message: "El correo ya se encuentra registrado",
      code: "EMAIL_CONFLICTS",
      details: "El correo proporcionado ya está en uso por otro usuario",
    };
  }

  const hashedPassword = await hashedArg.hash(password);
  const insertResult = await insertUser(
    nameUser,
    email,
    hashedPassword,
    accountStatus,
    role,
  );

  if (insertResult.affectedRows > 0) {
    const newUser = await getUserByEmail(email);
    return newUser;
  } else {
    throw {
      statusCode: 500,
      message: "No se pudo crear el usuario",
      code: "USER_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar el usuario en la base de datos",
    };
  }
};

export const insertUserMasiveService = async (countInsert) => {
  if (!countInsert || isNaN(countInsert)) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un usuario",
    };
  }

  const insertados = [];

  for (let i = 0; i < countInsert; i++) {
    const nameUser = faker.internet.username();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const role = "user";
    const accountStatus = "Inactivo";

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      throw {
        statusCode: 409,
        message: "El correo ya se encuentra registrado",
        code: "EMAIL_CONFLICTS",
        details: "El correo proporcionado ya está en uso por otro usuario",
      };
    }

    const hashedPassword = await hashedArg.hash(password);
    const insertResult = await insertUser(
      nameUser,
      email,
      hashedPassword,
      accountStatus,
      role,
    );

    if (insertResult.affectedRows > 0) {
      insertados.push({ nameUser, email, hashedPassword, role, accountStatus });
    }
  }
  return insertados;
};
