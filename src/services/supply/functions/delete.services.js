import {
  deleteSupplyBulk,
  deleteSupplyModel,
} from "../../../models/supply/index.js";

export const deleteSupplyService = async (supplyId) => {
  if (!supplyId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para eliminar un suministro",
    };
  }

  const result = await deleteSupplyModel(supplyId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar el suministro",
      code: "SUPPLY_DELETE_FAILED",
      dettails:
        "Hubo un error al intentar borrar el suministro en la base de datos",
    };
  }
};

export const deleteSupplyBulkService = async (ids) => {
  const MAX_IDS = 600;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw {
      statusCode: 413,
      message: `No se pueden eliminar más de ${MAX_IDS} suministros en una sola solicitud`,
      code: "OVERLOAD_REQUEST",
      details:
        "Debe proporcionar un array de IDs de suministros menor para que la solicitud sea válida",
    };
  }

  if (ids.length > MAX_IDS) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "TOO_MANY_IDS",
      details: "Todos los campos son obligatorios para eliminar un suministro",
    };
  }

  const batchSize = 100;
  const totalBatches = Math.ceil(ids.length / batchSize);

  for (let i = 0; i < totalBatches; i++) {
    const batch = ids.slice(i * batchSize, (i + 1) * batchSize);
    const placeholders = batch.map(() => "?").join(",");
    await deleteSupplyBulk(placeholders, batch);
  }
};
