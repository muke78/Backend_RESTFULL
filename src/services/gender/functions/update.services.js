import { updateGenderModel } from "../../../models/gender/index.js";

export const updateGenderService = async (genderId, { name }) => {
  const genderData = {
    name,
  };

  await updateGenderModel(genderId, genderData);
};
