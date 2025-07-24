import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateAssetsModel = async (
  assetsId,
  {
    condition,
    location,
    name,
    description,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status,
  },
) => {
  const query = `UPDATE cat_assets SET condition_id = ?, location_id = ?, name = ?, description = ?, purchase_date = ?, cost = ?, last_maintenance_date = ?, warranty_end_date = ?, status_id = ? WHERE assets_id = ?`;
  const params = [
    condition,
    location,
    name,
    description,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status,
    assetsId,
  ];
  return await connectionQuery(query, params);
};
