import {
  deleteEducationLevelService,
  insertEducationLevelService,
  listEducationLevelService,
  updateEducationLevelService,
} from "../../../services/educationLevel/index.js";

export const GetAllEducationsLevel = async () => {
  const listGetAllEducationsLevel = await listEducationLevelService();
  return listGetAllEducationsLevel;
};

export const InsertEducationLevel = async (education) => {
  const insertEducationLevel = await insertEducationLevelService(education);
  return insertEducationLevel;
};

export const UpdateEducationLevel = async (
  educationLevelId,
  educationLevelData,
) => {
  const updateEducationLevel = await updateEducationLevelService(
    educationLevelId,
    educationLevelData,
  );
  return updateEducationLevel;
};

export const DeleteEducationLevel = async (educationLevelId) => {
  const deleteEducationLevel =
    await deleteEducationLevelService(educationLevelId);
  return deleteEducationLevel;
};
