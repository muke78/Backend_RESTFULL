import { vaultInventoryModel } from "../../../models/inventory/index.js";

export const moveVaulInventoryService = async (inventoryId) => {
  await vaultInventoryModel(inventoryId);
};
