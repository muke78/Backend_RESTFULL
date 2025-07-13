import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const vaultInventoryModel = async (inventoryId) => {
  const query = `UPDATE catinventory SET Status = 'Inactivo' WHERE ID = ?`;
  const params = [inventoryId];
  await connectionQuery(query, params);
};
