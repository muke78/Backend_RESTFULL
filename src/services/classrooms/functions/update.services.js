import { updateClassroomsModel } from "../../../models/classrooms/index.js";

export const updateClassroomsService = async (
  classroomId,
  { name, room_type, capacity },
) => {
  const classroomsData = {
    name,
    room_type,
    capacity,
  };

  await updateClassroomsModel(classroomId, classroomsData);
};
