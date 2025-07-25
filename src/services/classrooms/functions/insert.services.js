import { insertClassroomsModel } from "../../../models/classrooms/index.js";

export const insertClassroomsService = async ({
  name,
  room_type,
  capacity,
}) => {
  if (!name || !room_type) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para crear un salon",
    };
  }

  const result = await insertClassroomsModel({ name, room_type, capacity });

  if (!result.affectedRows > 0) {
    throw {
      statusCode: 500,
      message: "No se pudo crear el salon",
      code: "CLASSROOMS_CREATION_FAILED",
      dettails:
        "Hubo un error al intentar insertar el salon en la base de datos",
    };
  }
};
