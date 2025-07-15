import {
  deleteInventoryBulk,
  deleteInventoryModel,
} from "../../../models/inventory/index.js";

export const deleteInventoryService = async (inventoryId) => {
  if (!inventoryId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para eliminar un inventario",
    };
  }

  const result = await deleteInventoryModel(inventoryId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar el inventario",
      code: "INVENTORY_DELETE_FAILED",
      dettails:
        "Hubo un error al intentar borrar el inventario en la base de datos",
    };
  }
};

export const deleteInventoryBulkService = async (ids) => {
  const MAX_IDS = 600;

  if (!Array.isArray(ids) || ids.length === 0) {
    throw {
      statusCode: 413,
      message: `No se pueden eliminar más de ${MAX_IDS} inventarios en una sola solicitud`,
      code: "OVERLOAD_REQUEST",
      details:
        "Debe proporcionar un array de IDs de inventarios menor para que la solicitud sea válida",
    };
  }

  if (ids.length > MAX_IDS) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "TOO_MANY_IDS",
      details: "Todos los campos son obligatorios para eliminar un inventario",
    };
  }

  const batchSize = 100;
  const totalBatches = Math.ceil(ids.length / batchSize);

  for (let i = 0; i < totalBatches; i++) {
    const batch = ids.slice(i * batchSize, (i + 1) * batchSize);
    const placeholders = batch.map(() => "?").join(",");
    await deleteInventoryBulk(placeholders, batch);
  }
};
