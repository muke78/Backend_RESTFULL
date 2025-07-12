import {
  deleteUser,
  deleteUserBulk,
  validateFoundUserToEliminated,
} from "../../../models/users/index.js";

export const deleteUserService = async (userId) => {
  if (!userId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un usuario",
    };
  }

  const foundUserToEliminated = await validateFoundUserToEliminated(userId);
  if (foundUserToEliminated.length === 0) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o el usuario no existe",
      code: "USER_NOT_FOUND",
      details: "El usuario con el ID proporcionado no fue encontrado",
    };
  }

  const deleteUserFromID = await deleteUser(userId);
  if (deleteUserFromID.affectedRows === 0) {
    throw { statusCode: 500 };
  }

  return foundUserToEliminated[0];
};

export const deleteUserBulkService = async (ids) => {
  const MAX_IDS = 600;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw {
      statusCode: 413,
      message: `No se pueden eliminar más de ${MAX_IDS} usuarios en una sola solicitud`,
      code: "OVERLOAD_REQUEST",
      details:
        "Debe proporcionar un array de IDs de usuarios menor para que la solicitud sea válida",
    };
  }

  if (ids.length > MAX_IDS) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "TOO_MANY_IDS",
      details: "Todos los campos son obligatorios para crear un usuario",
    };
  }

  const batchSize = 100;
  const totalBatches = Math.ceil(ids.length / batchSize);

  for (let i = 0; i < totalBatches; i++) {
    const batch = ids.slice(i * batchSize, (i + 1) * batchSize);
    const placeholders = batch.map(() => "?").join(",");
    await deleteUserBulk(placeholders, batch);
  }
};
