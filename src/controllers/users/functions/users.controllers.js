import {
  deleteUserBulkService,
  deleteUserService,
  insertUserMasiveService,
  insertUserService,
  listUsersService,
  loginGoogleService,
  loginService,
  registerUserService,
  searchUserService,
  updateUserService,
} from "../../../services/users/index.js";

export const GetAllUsers = async (listUsers) => {
  const listGetAllUsers = await listUsersService(listUsers);
  return listGetAllUsers;
};

export const SearchOfUsers = async (email) => {
  const searchOfUsers = await searchUserService(email);
  return searchOfUsers;
};

export const InsertUsers = async (user) => {
  const insertUsers = await insertUserService(user);
  return insertUsers;
};

export const Login = async (userData) => {
  const login = await loginService(userData);
  return login;
};

export const LoginFromGoogle = async (credential) => {
  const { responseData, isNewUser } = await loginGoogleService(credential);
  return { responseData, isNewUser };
};

export const RegisterUser = async (register) => {
  const registerUser = await registerUserService(register);
  return registerUser;
};

export const InsertUsersMasive = async (countInsert) => {
  const insertUserMasive = await insertUserMasiveService(countInsert);
  return insertUserMasive;
};

export const UpdateUser = async (userId, userData) => {
  const updateUser = await updateUserService(userId, userData);
  return updateUser;
};

export const DeleteUser = async (userId) => {
  const deleteUser = await deleteUserService(userId);
  return deleteUser;
};

export const DeleteUserBulk = async (ids) => {
  const deleteUserBulk = await deleteUserBulkService(ids);
  return deleteUserBulk;
};
