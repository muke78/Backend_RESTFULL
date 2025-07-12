import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteAssetModel = async (assetId) => {
  const query = `DELETE FROM catassets WHERE ID = ?`;
  const params = [assetId];
  return await connectionQuery(query, params);
};

export const deleteAssetBulk = async (placeholders, batch) => {
  const query = `DELETE FROM catassets WHERE ID IN (${placeholders})`;
  return await connectionQuery(query, batch);
};
