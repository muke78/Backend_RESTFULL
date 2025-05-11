import {
  deleteUser,
  deleteUserBulk,
  validateFoundUserToEliminated,
} from "../../../models/users/index.js";

export const deleteUserService = async ({ id }) => {
  if (!id) {
    throw { status: 400 };
  }

  const foundUserToEliminated = await validateFoundUserToEliminated(id);
  if (foundUserToEliminated.length === 0) {
    throw { status: 404 };
  }

  const deleteUserFromID = await deleteUser(id);
  if (deleteUserFromID.affectedRows === 0) {
    throw { status: 400 };
  }

  return foundUserToEliminated[0];
};

export const deleteUserBulkService = async ({ ids }) => {
  if (!Array.isArray(ids) || ids.length === 0) {
    throw {
      status: 400,
      message: `No se pueden eliminar más de ${MAX_IDS} usuarios en una sola solicitud`,
    };
  }

  const MAX_IDS = 600;
  if (ids.length > MAX_IDS) {
    throw { status: 400 };
  }

  const batchSize = 100;
  const totalBatches = Math.ceil(ids.length / batchSize);

  for (let i = 0; i < totalBatches; i++) {
    const batch = ids.slice(i * batchSize, (i + 1) * batchSize);
    const placeholders = batch.map(() => "?").join(",");
    await deleteUserBulk(placeholders, batch);
  }
};
