import { validateFoundToEliminated } from "../../../helpers/delete.helpers.js";
import { deleteGenderModel } from "../../../models/gender/index.js";

export const deleteGenderService = async (genderId) => {
  if (!genderId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para eliminar un genero",
    };
  }

  const foundGenderToEliminated = await validateFoundToEliminated(
    genderId,
    "gender_id",
    "name",
    "cat_gender",
  );

  if (foundGenderToEliminated.length === 0) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o el genero no existe",
      code: "GENDER_NOT_FOUND",
      details: "El genero con el ID proporcionado no fue encontrado",
    };
  }

  const result = await deleteGenderModel(genderId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar el genero",
      code: "GENDER_DELETE_FAILED",
      ettails: "Hubo un error al intentar borrar el genero en la base de datos",
    };
  }

  return foundGenderToEliminated[0];
};
