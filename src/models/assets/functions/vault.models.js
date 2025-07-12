import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const vaultAssetsModel = async (assetId) => {
  const query = `UPDATE catassets SET Status = 'Inactivo' WHERE ID = ?`;
  const params = [assetId];
  await connectionQuery(query, params);
};
