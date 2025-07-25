import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteEducationLevelModel = async (educationLevelId) => {
  const query = `DELETE FROM cat_educational_level WHERE level_education_id = ?;`;
  const params = [educationLevelId];
  return await connectionQuery(query, params);
};
