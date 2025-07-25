import {
  deleteClassroomService,
  insertClassroomsService,
  listClassroomsService,
  updateClassroomsService,
} from "../../../services/classrooms/index.js";

export const GetAllClassrooms = async () => {
  const listGetAllClassrooms = await listClassroomsService();
  return listGetAllClassrooms;
};

export const InsertClassrooms = async (classrooms) => {
  const insertClassrooms = await insertClassroomsService(classrooms);
  return insertClassrooms;
};

export const UpdateClassrooms = async (classroomsId, classroomsData) => {
  const updateClassrooms = await updateClassroomsService(
    classroomsId,
    classroomsData,
  );
  return updateClassrooms;
};

export const DeleteClassroom = async (classroomsId) => {
  const deleteClassroom = await deleteClassroomService(classroomsId);
  return deleteClassroom;
};
