import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateAssetsModel = async (
  assetsId,
  {
    name,
    description,
    purchaseDate,
    cost,
    location,
    condition,
    status,
    lastMaintenanceDate,
    warrantyEndDate,
  },
) => {
  const query = `UPDATE catassets SET Name = ?, Description  = ?, PurchaseDate = ?, Cost = ?, Location = ?, \`Condition\` = ?, Status = ?, LastMaintenanceDate = ?, WarrantyEndDate = ? WHERE ID = ?`;
  const params = [
    name,
    description,
    purchaseDate,
    cost,
    location,
    condition,
    status,
    lastMaintenanceDate,
    warrantyEndDate,
    assetsId,
  ];
  return await connectionQuery(query, params);
};
