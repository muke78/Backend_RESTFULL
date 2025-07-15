import { vaultInventoryModel } from "../../../models/inventory/index.js";

export const moveVaultInventoryService = async (inventoryId) => {
  await vaultInventoryModel(inventoryId);
};
