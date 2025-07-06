import {
  insertUserMasiveService,
  insertUserService,
} from "../../../services/users/index.js";

export const InsertarUsario = async (user) => {
  const newuser = await insertUserService(user);
  return newuser;
};

export const InsertarUsuariosRunnerMasive = async (countInsert) => {
  const newUserMasive = await insertUserMasiveService(countInsert);
  return newUserMasive;
};
