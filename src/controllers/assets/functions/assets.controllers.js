import {
  deleteAssetService,
  deleteAssetsBulkService,
  insertAssetsService,
  listAssetsService,
  moveVaultAssetService,
  searchAssetsService,
  updateAssetsService,
} from "../../../services/assets/index.js";

export const GetAllAssets = async (listAssets) => {
  const listGetAllAssets = await listAssetsService(listAssets);
  return listGetAllAssets;
};

export const SearchOfAssets = async (name) => {
  const searchOfAssets = await searchAssetsService(name);
  return searchOfAssets;
};

export const InsertAssets = async (user) => {
  const insertAssets = await insertAssetsService(user);
  return insertAssets;
};

export const UpdateAssets = async (assetsId, assetsData) => {
  const updateAssets = await updateAssetsService(assetsId, assetsData);
  return updateAssets;
};

export const MoveToVaultAssetDeleted = async (assetId) => {
  const moveVaultAsset = await moveVaultAssetService(assetId);
  return moveVaultAsset;
};

export const DeleteAsset = async (assetId) => {
  const deleteAsset = await deleteAssetService(assetId);
  return deleteAsset;
};

export const DeleteAssetsBulk = async (ids) => {
  const deleteAssetsBulk = await deleteAssetsBulkService(ids);
  return deleteAssetsBulk;
};
