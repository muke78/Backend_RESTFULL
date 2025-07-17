import { faker } from "@faker-js/faker";
import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.helpers.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.helpers.js";
import { insertUser } from "../../../models/users/index.js";

export const insertUserService = async ({
  name_user,
  email,
  password,
  status_id,
  role_id,
}) => {
  if (!name_user || !email || !password || !status_id || !role_id) {
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
    name_user,
    email,
    hashedPassword,
    status_id,
    role_id,
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
    const name_user = faker.internet.username();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const role_id = undefined;
    const status_id = "cefdafcc-61f5-11f0-a977-d843ae0db894";

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
      name_user,
      email,
      hashedPassword,
      status_id,
      role_id,
    );

    if (insertResult.affectedRows > 0) {
      insertados.push({ name_user, email, hashedPassword, role_id, status_id });
    }
  }
  return insertados;
};
