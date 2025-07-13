import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateInventoryModel = async (
  inventoryId,
  {
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
    status,
  },
) => {
  const query = `UPDATE catinventory SET ItemCode = ?, Name = ?, Description = ?, Quantity = ?, Weight = ?, Width = ?, Height = ?, Location = ?, \`Condition\` = ?, PurchaseDate = ?, Status = ? WHERE ID = ?`;
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
    status,
    inventoryId,
  ];
  return await connectionQuery(query, params);
};
