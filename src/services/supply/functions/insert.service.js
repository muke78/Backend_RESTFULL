import { insertSupplyModel } from "../../../models/supply/index.js";

export const insertSupplyService = async (supply) => {
  if (
    !supply.name ||
    !supply.description ||
    !supply.quantity ||
    !supply.unit ||
    !supply.supplier ||
    !supply.purchaseDate ||
    !supply.cost
  ) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un suministro",
    };
  }

  const result = await insertSupplyModel(supply);

  if (!result.affectedRows > 0) {
    throw {
      statusCode: 500,
      message: "No se pudo crear el suministro",
      code: "SUPPLY_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar el suministro en la base de datos",
    };
  }
};
