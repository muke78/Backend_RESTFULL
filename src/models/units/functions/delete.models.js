import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteUnitModel = async (unitId) => {
  const query = `DELETE FROM supply_units WHERE unit_id = ?;`;
  const params = [unitId];
  return await connectionQuery(query, params);
};
