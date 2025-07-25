import { vaultAssetsModel } from "../../../models/assets/index.js";

export const moveVaultAssetService = async (assetId) => {
  await vaultAssetsModel(assetId);
};
