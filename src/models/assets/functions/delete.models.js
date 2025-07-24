import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteAssetModel = async (assetId) => {
  const query = `DELETE FROM cat_assets WHERE assets_id = ?`;
  const params = [assetId];
  return await connectionQuery(query, params);
};

export const deleteAssetBulk = async (placeholders, batch) => {
  const query = `DELETE FROM cat_assets WHERE assets_id IN (${placeholders})`;
  return await connectionQuery(query, batch);
};
