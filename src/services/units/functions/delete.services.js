import { validateFoundToEliminated } from "../../../helpers/delete.helpers.js";
import { deleteUnitModel } from "../../../models/units/index.js";

export const deleteUnitService = async (unitId) => {
  if (!unitId) {
    throw {
      statusCode: 400,
      message: "Debe de proporcionar todos los campos",
      code: "FIELDS_REQUIRED",
      details: "Todos los campos son obligatorios para eliminar una unidad",
    };
  }

  const foundUnitToEliminated = await validateFoundToEliminated(
    unitId,
    "unit_id",
    "name",
    "supply_units",
  );

  if (foundUnitToEliminated.length === 0) {
    throw {
      statusCode: 404,
      message: "No se proporcionó un ID válido o la unidad no existe",
      code: "UNIT_NOT_FOUND",
      details: "La unidad con el ID proporcionado no fue encontrado",
    };
  }

  const result = await deleteUnitModel(unitId);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 500,
      message: "No se pudo eliminar la unidad",
      code: "UNIT_DELETE_FAILED",
      ettails: "Hubo un error al intentar borrar la unidad en la base de datos",
    };
  }

  return foundUnitToEliminated[0];
};
