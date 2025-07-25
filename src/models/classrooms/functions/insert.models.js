import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const insertClassroomsModel = async ({ name, room_type, capacity }) => {
  const query = `INSERT INTO cat_classrooms (
                location_id, name, room_type, capacity
                ) 
                VALUES 
                (
                    UUID(), 
                    ?, 
                    ?, 
                    ?
                );`;
  const params = [name, room_type, capacity];
  return await connectionQuery(query, params);
};
