import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertUnitModel = async ({ name, symbol }) => {
  const query = `
                INSERT INTO supply_units (unit_id, name, symbol) 
                VALUES 
                (
                    UUID(), 
                    ?,
                    ?
                );`;
  const params = [name, symbol];
  return await connectionQuery(query, params);
};
