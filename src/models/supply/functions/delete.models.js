import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteSupplyModel = async (supplyId) => {
  const query = `DELETE FROM cat_supplies WHERE supplies_id = ?`;
  const params = [supplyId];
  return await connectionQuery(query, params);
};

export const deleteSupplyBulk = async (placeholders, batch) => {
  const query = `DELETE FROM cat_supplies WHERE supplies_id IN (${placeholders})`;
  return await connectionQuery(query, batch);
};
