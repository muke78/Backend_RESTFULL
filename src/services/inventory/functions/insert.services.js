import {
  extractForeignKeysInventoryModel,
  insertInventoryModel,
} from "../../../models/inventory/index.js";

export const insertInventoryService = async ({
  condition,
  location,
  item_code,
  serial_number,
  name,
  description,
  quantity,
  weight,
  width,
  height,
  purchase_date,
  cost,
  last_maintenance_date,
  warranty_end_date,
  status,
}) => {
  if (
    !condition ||
    !location ||
    !item_code ||
    !serial_number ||
    !name ||
    !quantity ||
    !purchase_date ||
    !cost ||
    !last_maintenance_date ||
    !status
  ) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un inventario",
    };
  }

  const extract = await extractForeignKeysInventoryModel(
    condition,
    location,
    status,
  );

  const result = await insertInventoryModel({
    condition: extract[0].condition,
    location: extract[0].location,
    item_code,
    serial_number,
    name,
    description,
    quantity,
    weight,
    width,
    height,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status: extract[0].status,
  });

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
