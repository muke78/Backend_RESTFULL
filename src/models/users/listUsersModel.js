import { connectionQuery } from "../../helpers/connection.helper.js";

export const listUsersModel = async (query, params) => {
  const result = await connectionQuery(query, params);
  return result;
};
