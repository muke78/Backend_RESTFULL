import { vaultSupplyModel } from "../../../models/supply/index.js";

export const moveVaultSupplyService = async (supplyId) => {
  await vaultSupplyModel(supplyId);
};
