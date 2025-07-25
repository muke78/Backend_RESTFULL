import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteConditionModel = async (conditionId) => {
  const query = `DELETE FROM asset_conditions WHERE condition_id = ?;`;
  const params = [conditionId];
  return await connectionQuery(query, params);
};
