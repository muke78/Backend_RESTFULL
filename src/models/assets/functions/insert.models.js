import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertAssetsModel = async ({
  name,
  description,
  purchaseDate,
  cost,
  location,
  condition,
  lastMaintenanceDate,
  warrantyEndDate,
}) => {
  const query = `INSERT INTO catassets(ID, Name, Description, PurchaseDate, Cost, Location, \`Condition\`, LastMaintenanceDate, WarrantyEndDate) 
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?);`;
  const params = [
    name,
    description,
    purchaseDate,
    cost,
    location,
    condition,
    lastMaintenanceDate,
    warrantyEndDate,
  ];
  return await connectionQuery(query, params);
};
