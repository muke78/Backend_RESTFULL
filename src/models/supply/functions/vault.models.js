import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const vaultSupplyModel = async (supplyId) => {
  const query = `UPDATE cat_supplies SET status_id = 'cefdb296-61f5-11f0-a977-d843ae0db894' WHERE supplies_id = ?`;
  const params = [supplyId];
  await connectionQuery(query, params);
};
