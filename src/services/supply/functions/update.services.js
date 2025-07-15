import { updateSupplyModel } from "../../../models/supply/index.js";

export const updateSupplyService = async (supplyId, supplyData) => {
  await updateSupplyModel(supplyId, supplyData);
};
