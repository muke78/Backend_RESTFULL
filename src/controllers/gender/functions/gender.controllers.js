import {
  deleteGenderService,
  insertGenderService,
  listGenderService,
  updateGenderService,
} from "../../../services/gender/index.js";

export const GetAllGender = async () => {
  const listGetAllGender = await listGenderService();
  return listGetAllGender;
};

export const InsertGender = async (gender) => {
  const insertGender = await insertGenderService(gender);
  return insertGender;
};

export const UpdateGender = async (genderId, genderData) => {
  const updateGender = await updateGenderService(genderId, genderData);
  return updateGender;
};

export const DeleteGender = async (genderId) => {
  const deleteGender = await deleteGenderService(genderId);
  return deleteGender;
};
