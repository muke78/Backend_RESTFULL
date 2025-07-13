import { insertInventoryModel } from "../../../models/inventory/index.js";

export const insertInventoryService = async (inventory) => {
  if (
    !inventory.itemCode ||
    !inventory.name ||
    !inventory.description ||
    !inventory.quantity ||
    !inventory.weight ||
    !inventory.width ||
    !inventory.height ||
    !inventory.location ||
    !inventory.condition ||
    !inventory.purchaseDate
  ) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un inventario",
    };
  }

  const result = await insertInventoryModel(inventory);

  if (!result.affectedRows > 0) {
    throw {
      statusCode: 500,
      message: "No se pudo crear el inventario",
      code: "INVENTORY_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar el inventario en la base de datos",
    };
  }
};
