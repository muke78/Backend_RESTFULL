import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertConditionsModel = async ({ name, description }) => {
  const query = `
                INSERT INTO asset_conditions (condition_id, name, description) 
                VALUES 
                (
                    UUID(), 
                    ?, 
                    ?
                );`;
  const params = [name, description];
  return await connectionQuery(query, params);
};
