import { listGenderModel } from "../../../models/gender/index.js";

export const listGenderService = async () => {
  return await listGenderModel();
};
