import { updateEducationLevelModel } from "../../../models/educationLevel/index.js";

export const updateEducationLevelService = async (
  educationLevelId,
  { name, short_name },
) => {
  const educationLevelData = {
    name,
    short_name,
  };

  await updateEducationLevelModel(educationLevelId, educationLevelData);
};
