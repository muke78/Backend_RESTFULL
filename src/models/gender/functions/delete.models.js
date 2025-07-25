import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteGenderModel = async (genderId) => {
  const query = `DELETE FROM cat_gender WHERE gender_id = ?;`;
  const params = [genderId];
  return await connectionQuery(query, params);
};
