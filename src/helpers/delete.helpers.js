import { connectionQuery } from "../helpers/connection.helpers.js";

export const validateFoundToEliminated = async (
  paramId,
  field_name,
  table_name,
) => {
  const query = `SELECT ${field_name} FROM ${table_name} WHERE user_id = ?`;
  const params = [paramId];
  return await connectionQuery(query, params);
};
