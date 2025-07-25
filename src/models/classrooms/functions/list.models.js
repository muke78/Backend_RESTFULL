import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const listClassroomsModel = async () => {
  const query = `SELECT * FROM cat_classrooms;`;
  const result = await connectionQuery(query);
  return result;
};
