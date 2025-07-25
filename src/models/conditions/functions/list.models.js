import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listConditionsModel = async () => {
  const query = `SELECT * FROM asset_conditions;`;
  const result = await connectionQuery(query);
  return result;
};
