import { faker } from "@faker-js/faker";
import hashedArg from "argon2";

import { findUserByEmail } from "../../../helpers/findUserByEmail.js";
import { getUserByEmail } from "../../../helpers/getUserByEmail.js";
import { insertUser } from "../../../models/users/index.js";

export const insertUserService = async ({
  nameUser,
  email,
  password,
  accountStatus,
  role,
}) => {
  if (!nameUser || !email || !password || !accountStatus || !role) {
    throw { status: 400, message: "Faltan campos por completar" };
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw { status: 409, message: "El correo ya se encuentra registrado" };
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
    throw { status: 500 };
  }
};

export const insertUserMasiveService = async ({ countInsert }) => {
  if (!countInsert || isNaN(countInsert)) {
    throw { status: 400, message: "Faltan campos por completar" };
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
      throw { status: 409, message: "El correo ya se encuentra registrado" };
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
