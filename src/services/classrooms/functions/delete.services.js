import { validateFoundToEliminated } from "../../../helpers/delete.helpers.js";
import { deleteClassroomModel } from "../../../models/classrooms/index.js";

export const deleteClassroomService = async (classroomId) => {
  if (!classroomId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para eliminar un salon",
    };
  }

  const foundClassroomToEliminated = await validateFoundToEliminated(
    classroomId,
    "location_id",
    "name",
    "cat_classrooms",
  );

  if (foundClassroomToEliminated.length === 0) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o el salon no existe",
      code: "CLASSROOM_NOT_FOUND",
      details: "El salon con el ID proporcionado no fue encontrado",
    };
  }

  const result = await deleteClassroomModel(classroomId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar el salon",
      code: "CLASSROOM_DELETE_FAILED",
      ettails: "Hubo un error al intentar borrar el salon en la base de datos",
    };
  }

  return foundClassroomToEliminated[0];
};
