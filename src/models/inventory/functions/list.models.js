import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listInventoryModel = async (query, params) => {
  const result = await connectionQuery(query, params);
  return result;
};
