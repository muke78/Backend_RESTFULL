import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateEducationLevelModel = async (
  educationLevelId,
  { name, short_name },
) => {
  const query = `UPDATE 
                cat_educational_level 
                SET 
                name = ?, 
                short_name = ? 
                WHERE 
                level_education_id = ?`;
  const params = [name, short_name, educationLevelId];

  return await connectionQuery(query, params);
};
