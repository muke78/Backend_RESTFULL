import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listSupplyModel = async (query, params) => {
  const result = await connectionQuery(query, params);
  return result;
};
