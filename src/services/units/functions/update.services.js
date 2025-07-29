import { updateUnitModel } from "../../../models/units/index.js";

export const updateUnitService = async (unitId, { name, symbol }) => {
  const unitData = {
    name,
    symbol,
  };

  await updateUnitModel(unitId, unitData);
};
