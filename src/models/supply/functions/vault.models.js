import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const vaultSupplyModel = async (supplyId) => {
  const query = `UPDATE catsupplies SET Status = 'Inactivo' WHERE ID = ?`;
  const params = [supplyId];
  await connectionQuery(query, params);
};
