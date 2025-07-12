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

  const result = await deleteAssetModel(assetId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar el activo",
      code: "ASSETS_DELETE_FAILED",
      dettails:
        "Hubo un error al intentar borrar el activo en la base de datos",
    };
  }
};

export const deleteAssetsBulkService = async (ids) => {
  const MAX_IDS = 600;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw {
      status: 413,
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
