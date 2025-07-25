import { listConditionsModel } from "../../../models/conditions/index.js";

export const listConditionsService = async () => {
  return await listConditionsModel();
};
