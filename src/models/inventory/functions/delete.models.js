import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteInventoryModel = async (inventoryId) => {
  const query = `DELETE FROM catinventory WHERE ID = ?`;
  const params = [inventoryId];
  return await connectionQuery(query, params);
};

export const deleteInventoryBulk = async (placeholders, batch) => {
  const query = `DELETE FROM catinventory WHERE ID IN (${placeholders})`;
  return await connectionQuery(query, batch);
};
