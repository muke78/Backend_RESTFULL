import {
  extractForeignKeysInventoryModel,
  updateInventoryModel,
} from "../../../models/inventory/index.js";

export const updateInventoryService = async (
  inventoryId,
  {
    condition,
    location,
    item_code,
    serial_number,
    name,
    description,
    quantity,
    weight,
    width,
    height,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status,
  },
) => {
  const extract = await extractForeignKeysInventoryModel(
    condition,
    location,
    status,
  );

  const inventoryData = {
    condition: extract[0].condition,
    location: extract[0].location,
    item_code,
    serial_number,
    name,
    description,
    quantity,
    weight,
    width,
    height,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status: extract[0].status,
  };

  await updateInventoryModel(inventoryId, inventoryData);
};
