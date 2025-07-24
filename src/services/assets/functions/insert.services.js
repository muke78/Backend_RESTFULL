import {
  extractForeignKeysAssetsModel,
  insertAssetsModel,
} from "../../../models/assets/index.js";

export const insertAssetsService = async ({
  condition,
  location,
  name,
  description,
  purchase_date,
  cost,
  last_maintenance_date,
  warranty_end_date,
  status,
}) => {
  if (
    !condition ||
    !location ||
    !name ||
    !description ||
    !purchase_date ||
    !cost ||
    !last_maintenance_date ||
    !status
  ) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un activo",
    };
  }

  const extract = await extractForeignKeysAssetsModel(
    condition,
    location,
    status,
  );

  const result = await insertAssetsModel({
    condition: extract[0].condition,
    location: extract[0].location,
    name,
    description,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status: extract[0].status,
  });

  if (!result.affectedRows > 0) {
    throw {
      statusCode: 500,
      message: "No se pudo crear el activo",
      code: "ASSETS_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar el activo en la base de datos",
    };
  }
};
