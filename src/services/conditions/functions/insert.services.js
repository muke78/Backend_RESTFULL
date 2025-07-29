import { insertConditionsModel } from "../../../models/conditions/index.js";

export const insertConditionsService = async ({ name, description }) => {
  if (!name) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear una condicion",
    };
  }

  const result = await insertConditionsModel({ name, description });

  if (!result.affectedRows > 0) {
    throw {
      statusCode: 500,
      message: "No se pudo crear la condicion",
      code: "CONDITIONS_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar la condicion en la base de datos",
    };
  }
};
