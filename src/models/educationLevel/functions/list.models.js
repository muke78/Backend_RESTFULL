import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listEducationLevelModel = async () => {
  const query = `SELECT * FROM cat_educational_level;`;
  const result = await connectionQuery(query);
  return result;
};
