import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateConditionsModel = async (
  conditionsId,
  { name, description },
) => {
  const query = `UPDATE 
                asset_conditions 
                SET 
                name = ?, 
                description = ? 
                WHERE 
                condition_id = ?`;
  const params = [name, description, conditionsId];

  return await connectionQuery(query, params);
};
