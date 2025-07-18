import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const extractForeignKeysAssetsModel = async (
  condition,
  location,
  status,
) => {
  const query = `SELECT 
    (SELECT 
            condition_id
        FROM
            asset_conditions
        WHERE
            name = ?) AS 'condition',
    (SELECT 
            location_id
        FROM
            cat_classrooms
        WHERE
            name = ?) AS location,
    (SELECT 
            status_id
        FROM
            cat_status
        WHERE
            name = ?) AS status;`;
  const result = await connectionQuery(query, [condition, location, status]);
  return result;
};

export const insertAssetsModel = async ({
  condition,
  location,
  name,
  description,
  purchase_date,
  cost,
  last_maintenance_date,
  warranty_end_date,
  status,
}) => {
  const query = `INSERT INTO cat_assets (
                                        assets_id, condition_id, location_id, 
                                        name, description, purchase_date, 
                                        cost, last_maintenance_date, warranty_end_date, 
                                        status_id
                                        )  
                                        VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
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
  ];
  return await connectionQuery(query, params);
};
