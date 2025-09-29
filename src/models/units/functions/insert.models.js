import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertUnitModel = async ({ unit_id, name, symbol }) => {
  const query = `
                INSERT INTO supply_units (unit_id, name, symbol) 
                VALUES 
                (
                    ?,
                    ?,
                    ?
                );`;
  const params = [unit_id, name, symbol];
  return await connectionQuery(query, params);
};
