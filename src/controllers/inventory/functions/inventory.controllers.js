import {
  deleteInventoryBulkService,
  deleteInventoryService,
  insertInventoryService,
  listInventoryService,
  moveVaulInventoryService,
  searchInventoryService,
  updateInventoryService,
} from "../../../services/inventory/index.js";

export const GetAllInventories = async (listInventories) => {
  const listGetAllInvetories = await listInventoryService(listInventories);
  return listGetAllInvetories;
};

export const SearchOfInventories = async (name) => {
  const searchOfInventories = await searchInventoryService(name);
  return searchOfInventories;
};

export const InsertInventories = async (inventory) => {
  const insertInventories = await insertInventoryService(inventory);
  return insertInventories;
};

export const UpdateInventories = async (inventoryId, inventoryData) => {
  const updateInventories = await updateInventoryService(
    inventoryId,
    inventoryData,
  );
  return updateInventories;
};

export const MoveToVaultInventoryDeleted = async (inventoryId) => {
  const moveToVaultInventory = await moveVaulInventoryService(inventoryId);
  return moveToVaultInventory;
};

export const DeleteInventory = async (inventoryId) => {
  const deleteInventory = await deleteInventoryService(inventoryId);
  return deleteInventory;
};

export const DeleteInventoriesBulk = async (ids) => {
  const deleteInventoriesBulk = await deleteInventoryBulkService(ids);
  return deleteInventoriesBulk;
};
