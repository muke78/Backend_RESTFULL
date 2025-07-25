import { insertGenderModel } from "../../../models/gender/index.js";

export const insertGenderService = async ({ name }) => {
  if (!name) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un genero",
    };
  }

  const result = await insertGenderModel({ name });

  if (!result.affectedRows > 0) {
    throw {
      statusCode: 500,
      message: "No se pudo crear el genero",
      code: "GENDER_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar el genero en la base de datos",
    };
  }
};
