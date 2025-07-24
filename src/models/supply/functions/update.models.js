import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateSupplyModel = async (
  supplyId,
  {
    supplier,
    unit,
    name,
    description,
    quantity,
    purchaseDate,
    expiryDate,
    cost,
    status,
  },
) => {
  const query = `UPDATE cat_supplies SET 
                                      supplier_id = ?, 
                                      unit_id = ?, 
                                      name = ?, 
                                      description = ?, 
                                      quantity = ?, 
                                      purchase_date = ?, 
                                      expiry_date = ?, 
                                      cost = ?, 
                                      status_id = ? 
                                      WHERE supplies_id = ?`;
  const params = [
    supplier,
    unit,
    name,
    description,
    quantity,
    purchaseDate,
    expiryDate,
    cost,
    status,
    supplyId,
  ];

  return await connectionQuery(query, params);
};
