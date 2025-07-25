import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const deleteClassroomModel = async (classroomId) => {
  const query = `DELETE FROM cat_classrooms WHERE location_id = ?;`;
  const params = [classroomId];
  return await connectionQuery(query, params);
};
