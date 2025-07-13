import { updateInventoryModel } from "../../../models/inventory/index.js";

export const updateInventoryService = async (inventoryId, inventoryData) => {
  await updateInventoryModel(inventoryId, inventoryData);
};
