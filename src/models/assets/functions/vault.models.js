import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const vaultAssetsModel = async (assetId) => {
  const query = `UPDATE cat_assets SET status_id = "cefdb296-61f5-11f0-a977-d843ae0db894" WHERE assets_id = ?`;
  const params = [assetId];
  await connectionQuery(query, params);
};
