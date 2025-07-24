import {
  extractForeignKeysAssetsModel,
  updateAssetsModel,
} from "../../../models/assets/index.js";

export const updateAssetsService = async (
  assetsId,
  {
    condition,
    location,
    name,
    description,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status,
  },
) => {
  const extract = await extractForeignKeysAssetsModel(
    condition,
    location,
    status,
  );

  const assetsData = {
    condition: extract[0].condition,
    location: extract[0].location,
    name,
    description,
    purchase_date,
    cost,
    last_maintenance_date,
    warranty_end_date,
    status: extract[0].status,
  };
  await updateAssetsModel(assetsId, assetsData);
};
