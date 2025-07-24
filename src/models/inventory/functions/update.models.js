import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateInventoryModel = async (
  inventoryId,
  {
    condition,
    location,
    item_code,
    serial_number,
    name,
    description,
    quantity,
    weight,
    width,
    height,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status,
  },
) => {
  const query = `UPDATE 
                cat_inventory 
              SET 
                condition_id = ?, 
                location_id = ?, 
                item_code = ?, 
                serial_number = ?, 
                name = ?, 
                description = ?, 
                quantity = ?, 
                weight = ?, 
                width = ?, 
                height = ?, 
                purchase_date = ?, 
                cost = ?,
                last_maintenance_date = ?,
                warranty_end_date = ?,
                status_id = ? 
              WHERE 
                inventory_id = ?;`;

  const params = [
    condition,
    location,
    item_code,
    serial_number,
    name,
    description,
    quantity,
    weight,
    width,
    height,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status,
    inventoryId,
  ];
  return await connectionQuery(query, params);
};
