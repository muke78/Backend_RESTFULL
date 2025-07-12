import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listAssetsModel = async (query, params) => {
  const result = await connectionQuery(query, params);
  return result;
};
