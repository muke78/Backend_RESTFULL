import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertGenderModel = async ({ name }) => {
  const query = `
                INSERT INTO cat_gender (gender_id, name) 
                VALUES 
                (
                    UUID(), 
                    ?
                );`;
  const params = [name];
  return await connectionQuery(query, params);
};
