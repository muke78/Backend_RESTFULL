import {
  deleteConditionService,
  insertConditionsService,
  listConditionsService,
  updateConditionsService,
} from "../../../services/conditions/index.js";

export const GetAllConditions = async () => {
  const listGetAllConditions = await listConditionsService();
  return listGetAllConditions;
};

export const InsertConditions = async (conditions) => {
  const insertConditions = await insertConditionsService(conditions);
  return insertConditions;
};

export const UpdateConditions = async (conditionsId, conditionsData) => {
  const updateConditions = await updateConditionsService(
    conditionsId,
    conditionsData,
  );
  return updateConditions;
};

export const DeleteCondition = async (conditionId) => {
  const deleteCondition = await deleteConditionService(conditionId);
  return deleteCondition;
};
