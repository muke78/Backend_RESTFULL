import {
  extractForeignKeysSupplyModel,
  insertSupplyModel,
} from "../../../models/supply/index.js";

export const insertSupplyService = async ({
  supplier,
  unit,
  name,
  description,
  quantity,
  purchaseDate,
  expiryDate,
  cost,
  status,
}) => {
  if (
    !supplier ||
    !unit ||
    !name ||
    !description ||
    !quantity ||
    !purchaseDate ||
    !expiryDate ||
    !cost ||
    !status
  ) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un suministro",
    };
  }

  const extract = await extractForeignKeysSupplyModel(supplier, unit, status);

  const result = await insertSupplyModel({
    supplier: extract[0].supplier,
    unit: extract[0].unit,
    name,
    description,
    quantity,
    purchaseDate,
    expiryDate,
    cost,
    status: extract[0].status,
  });

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
