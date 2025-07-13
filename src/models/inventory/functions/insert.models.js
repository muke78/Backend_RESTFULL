import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertInventoryModel = async ({
  itemCode,
  name,
  description,
  quantity,
  weight,
  width,
  height,
  location,
  condition,
  purchaseDate,
}) => {
  const query = `INSERT INTO catinventory (ID, ItemCode, Name, Description, Quantity, Weight, Width, Height, Location, \`Condition\`, PurchaseDate)
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  const params = [
    itemCode,
    name,
    description,
    quantity,
    weight,
    width,
    height,
    location,
    condition,
    purchaseDate,
  ];

  return await connectionQuery(query, params);
};
