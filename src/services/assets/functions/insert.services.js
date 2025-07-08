import { insertAssetsModel } from "../../../models/assets/index.js";

export const insertAssetsService = async (user) => {
  if (
    !user.name ||
    !user.description ||
    !user.purchaseDate ||
    !user.cost ||
    !user.location ||
    !user.condition ||
    !user.lastMaintenanceDate ||
    !user.warrantyEndDate
  ) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un activo",
    };
  }

  const result = await insertAssetsModel(user);

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
