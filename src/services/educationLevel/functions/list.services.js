import { listEducationLevelModel } from "../../../models/educationLevel/index.js";

export const listEducationLevelService = async () => {
  return await listEducationLevelModel();
};
