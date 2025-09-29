import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateUnitModel = async (unitId, { name, symbol }) => {
  const query = `UPDATE 
                supply_units 
                SET 
                name = ?,
                symbol = ?
                WHERE 
                unit_id = ?`;
  const params = [name, symbol, unitId];

  return await connectionQuery(query, params);
};
