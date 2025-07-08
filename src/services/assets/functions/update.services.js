import { updateAssetsModel } from "../../../models/assets/index.js";

export const updateAssetsService = async (assetsId, assetsData) => {
  await updateAssetsModel(assetsId, assetsData);
};
