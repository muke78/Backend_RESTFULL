import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listGenderModel = async () => {
  const query = `SELECT * FROM cat_gender;`;
  const result = await connectionQuery(query);
  return result;
};
