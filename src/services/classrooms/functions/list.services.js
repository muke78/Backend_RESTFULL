import { listClassroomsModel } from "../../../models/classrooms/index.js";

export const listClassroomsService = async () => {
  return await listClassroomsModel();
};
