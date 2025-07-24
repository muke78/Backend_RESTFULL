import {
  extractForeignKeysSupplyModel,
  updateSupplyModel,
} from "../../../models/supply/index.js";

export const updateSupplyService = async (
  supplyId,
  {
    supplier,
    unit,
    name,
    description,
    quantity,
    purchaseDate,
    expiryDate,
    cost,
    status,
  },
) => {
  const extract = await extractForeignKeysSupplyModel(supplier, unit, status);

  const supplyData = {
    supplier: extract[0].supplier,
    unit: extract[0].unit,
    name,
    description,
    quantity,
    purchaseDate,
    expiryDate,
    cost,
    status: extract[0].status,
  };

  await updateSupplyModel(supplyId, supplyData);
};
