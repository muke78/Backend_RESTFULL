import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listUnitModel = async () => {
  const query = `SELECT * FROM supply_units;`;
  const result = await connectionQuery(query);
  return result;
};
