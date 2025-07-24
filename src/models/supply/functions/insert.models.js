import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const extractForeignKeysSupplyModel = async (supplier, unit, status) => {
  const query = `SELECT 
    (SELECT 
            supplier_id
        FROM
            cat_supplier
        WHERE
            name = ?) AS supplier,
    (SELECT 
            unit_id
        FROM
            supply_units
        WHERE
            name = ?) AS unit,
    (SELECT 
            status_id
        FROM
            cat_status
        WHERE
            name = ?) AS status;`;
  const result = await connectionQuery(query, [supplier, unit, status]);
  return result;
};

export const insertSupplyModel = async ({
  supplier,
  unit,
  name,
  description,
  quantity,
  purchaseDate,
  expiryDate,
  cost,
  status,
}) => {
  const query = `INSERT INTO cat_supplies (supplies_id, supplier_id, unit_id, name, description, quantity, purchase_date, expiry_date, cost, status_id) 
    VALUES (UUID(),? ,? ,? ,? ,? ,? ,? ,?, ?);`;

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
  ];

  return await connectionQuery(query, params);
};
