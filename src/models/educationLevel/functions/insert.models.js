import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertEducationLevelModel = async ({ name, short_name }) => {
  const query = `
                INSERT INTO cat_educational_level (level_education_id, name, short_name) 
                VALUES 
                (
                    UUID(), 
                    ?, 
                    ?
                );`;
  const params = [name, short_name];
  return await connectionQuery(query, params);
};
