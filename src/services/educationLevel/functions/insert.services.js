import { insertEducationLevelModel } from "../../../models/educationLevel/index.js";

export const insertEducationLevelService = async ({ name, short_name }) => {
  if (!name) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details:
        "Todos los campos son obligatorios para crear un nivel educativo",
    };
  }

  const result = await insertEducationLevelModel({ name, short_name });

  if (!result.affectedRows > 0) {
    throw {
      statusCode: 500,
      message: "No se pudo crear el nivel educativo",
      code: "EDUCATION_LEVEL_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar el nivel educativo en la base de datos",
    };
  }
};
