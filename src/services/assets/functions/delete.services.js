import { validateFoundToEliminated } from "../../../helpers/delete.helpers.js";
import {
  deleteAssetBulk,
  deleteAssetModel,
} from "../../../models/assets/index.js";

export const deleteAssetService = async (assetId) => {
  if (!assetId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para eliminar un activo",
    };
  }

  const foundAssetToEliminated = await validateFoundToEliminated(
    assetId,
    "assets_id",
    "name",
    "cat_assets",
  );

  if (foundAssetToEliminated.length === 0) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o el activo no existe",
      code: "ASSETS_NOT_FOUND",
      details: "El activo con el ID proporcionado no fue encontrado",
    };
  }

  const result = await deleteAssetModel(assetId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar el activo",
      code: "ASSETS_DELETE_FAILED",
      ettails: "Hubo un error al intentar borrar el activo en la base de datos",
    };
  }

  return foundAssetToEliminated[0];
};

export const deleteAssetsBulkService = async (ids) => {
  const MAX_IDS = 600;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw {
      statusCode: 413,
      message: `No se pueden eliminar más de ${MAX_IDS} activos en una sola solicitud`,
      code: "OVERLOAD_REQUEST",
      details:
        "Debe proporcionar un array de IDs de activos menor para que la solicitud sea válida",
    };
  }

  if (ids.length > MAX_IDS) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "TOO_MANY_IDS",
      details: "Todos los campos son obligatorios para eliminar un activo",
    };
  }

  const batchSize = 100;
  const totalBatches = Math.ceil(ids.length / batchSize);

  for (let i = 0; i < totalBatches; i++) {
    const batch = ids.slice(i * batchSize, (i + 1) * batchSize);
    const placeholders = batch.map(() => "?").join(",");
    await deleteAssetBulk(placeholders, batch);
  }
};
