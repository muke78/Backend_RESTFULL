import {
  deleteUserBulkService,
  deleteUserService,
} from "../../../services/users/index.js";

export const EliminarUsuario = async (userId) => {
  const deletedUser = await deleteUserService(userId);
  return deletedUser;
};

export const DeleteUserBulk = async (ids) => {
  const deleteUserBulk = await deleteUserBulkService(ids);
  return deleteUserBulk;
};
