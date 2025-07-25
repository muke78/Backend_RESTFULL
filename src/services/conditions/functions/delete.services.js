import { validateFoundToEliminated } from "../../../helpers/delete.helpers.js";
import { deleteConditionModel } from "../../../models/conditions/index.js";

export const deleteConditionService = async (conditionId) => {
  if (!conditionId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para eliminar una condicion",
    };
  }

  const foundConditionToEliminated = await validateFoundToEliminated(
    conditionId,
    "condition_id",
    "name",
    "asset_conditions",
  );

  if (foundConditionToEliminated.length === 0) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o la condicion no existe",
      code: "CONDITION_NOT_FOUND",
      details: "La condicion con el ID proporcionado no fue encontrado",
    };
  }

  const result = await deleteConditionModel(conditionId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar la condicion",
      code: "CONDITION_DELETE_FAILED",
      ettails:
        "Hubo un error al intentar borrar la condicion en la base de datos",
    };
  }

  return foundConditionToEliminated[0];
};
