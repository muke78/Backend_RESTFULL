import { updateConditionsModel } from "../../../models/conditions/index.js";

export const updateConditionsService = async (
  conditionsId,
  { name, description },
) => {
  const conditionsData = {
    name,
    description,
  };

  await updateConditionsModel(conditionsId, conditionsData);
};
