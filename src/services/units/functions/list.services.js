import { listUnitModel } from "../../../models/units/index.js";

export const listUnitService = async () => {
  return await listUnitModel();
};
