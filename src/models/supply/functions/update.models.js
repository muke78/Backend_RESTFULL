import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateSupplyModel = async (
  supplyId,
  {
    name,
    description,
    quantity,
    unit,
    supplier,
    purchaseDate,
    expiryDate,
    cost,
    status,
  },
) => {
  const query = `UPDATE catsupplies SET Name = ?, Description = ?, Quantity = ?, Unit = ?, Supplier = ?, PurchaseDate = ?, ExpiryDate = ?, Cost = ?, Status = ? WHERE ID = ?`;
  const params = [
    name,
    description,
    quantity,
    unit,
    supplier,
    purchaseDate,
    expiryDate,
    cost,
    status,
    supplyId,
  ];

  return await connectionQuery(query, params);
};
