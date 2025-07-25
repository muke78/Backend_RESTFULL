import { validateFoundToEliminated } from "../../../helpers/delete.helpers.js";
import { deleteEducationLevelModel } from "../../../models/educationLevel/index.js";

export const deleteEducationLevelService = async (educationLevelId) => {
  if (!educationLevelId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details:
        "Todos los campos son obligatorios para eliminar una nivel educativo",
    };
  }

  const foundEducationLevelToEliminated = await validateFoundToEliminated(
    educationLevelId,
    "level_education_id",
    "name",
    "cat_educational_level",
  );

  if (foundEducationLevelToEliminated.length === 0) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o el nivel educativo no existe",
      code: "EDUCATION_LEVEL_NOT_FOUND",
      details: "El nivel educativo con el ID proporcionado no fue encontrado",
    };
  }

  const result = await deleteEducationLevelModel(educationLevelId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar el nivel educativo",
      code: "EDUCATION_LEVEL_DELETE_FAILED",
      ettails:
        "Hubo un error al intentar borrar el nivel educativo en la base de datos",
    };
  }

  return foundEducationLevelToEliminated[0];
};
