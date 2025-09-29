import { updateUnitModel } from "../../../models/units/index.js";

export const updateUnitService = async (unitId, { name, symbol }) => {
  if (!unitId || !name) {
    throw {
      statusCode: 400,
      message: "El ID y el nombre de la unidad son obligatorios.",
      code: "FIELDS_REQUIRED",
    };
  }

  const unitData = {
    name,
    symbol,
  };

  const result = await updateUnitModel(unitId, unitData);

  if (result.affectedRows === 0) {
    throw {
      statusCode: 404,
      message: "Unidad no encontrada o los datos no han cambiado.",
      code: "UNIT_NOT_FOUND_OR_NO_CHANGES",
    };
  }

  return { unit_id: unitId, ...unitData };
};
