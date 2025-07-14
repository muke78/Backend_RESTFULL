import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertSupplyModel = async ({
  name,
  description,
  quantity,
  unit,
  supplier,
  purchaseDate,
  expiryDate,
  cost,
}) => {
  const query = `INSERT INTO catsupplies (ID, Name, Description, Quantity, Unit, Supplier, PurchaseDate, ExpiryDate, Cost) 
    VALUES (UUID(),? ,? ,? ,? ,? ,? ,? ,? );`;

  const params = [
    name,
    description,
    quantity,
    unit,
    supplier,
    purchaseDate,
    expiryDate,
    cost,
  ];

  return await connectionQuery(query, params);
};
