import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const vaultInventoryModel = async (inventoryId) => {
  const query = `UPDATE cat_inventory SET status_id = "cefdb296-61f5-11f0-a977-d843ae0db894" WHERE inventory_id = ?`;
  const params = [inventoryId];
  await connectionQuery(query, params);
};
