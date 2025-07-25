import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const updateClassroomsModel = async (
  classroomsId,
  { name, room_type, capacity },
) => {
  const query = `UPDATE 
                cat_classrooms 
                SET 
                name = ?, 
                room_type = ?, 
                capacity = ? 
                WHERE 
                location_id = ?`;
  const params = [name, room_type, capacity, classroomsId];

  return await connectionQuery(query, params);
};
