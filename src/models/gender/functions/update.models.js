import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateGenderModel = async (genderId, { name }) => {
  const query = `UPDATE 
                cat_gender 
                SET 
                name = ?
                WHERE 
                gender_id = ?`;
  const params = [name, genderId];

  return await connectionQuery(query, params);
};
