import {
  deleteSupplyBulkService,
  deleteSupplyService,
  insertSupplyService,
  listSupplyService,
  moveVaultSupplyService,
  searchSupplyService,
  updateSupplyService,
} from "../../../services/supply/index.js";

export const GetAllSupplies = async (listSupplies) => {
  const listGetAllSupplies = await listSupplyService(listSupplies);
  return listGetAllSupplies;
};

export const SearchOfSupplies = async (name) => {
  const searchOfSupplies = await searchSupplyService(name);
  return searchOfSupplies;
};

export const InsertSupplies = async (supply) => {
  const insertSupplies = await insertSupplyService(supply);
  return insertSupplies;
};

export const UpdateSupplies = async (supplyId, supplyData) => {
  const updateSupplies = await updateSupplyService(supplyId, supplyData);
  return updateSupplies;
};

export const MoveToVaultSupplyDeleted = async (supplyId) => {
  const moveToVaultSupplyDeleted = await moveVaultSupplyService(supplyId);
  return moveToVaultSupplyDeleted;
};

export const DeleteSupply = async (supplyId) => {
  const deleteSupply = await deleteSupplyService(supplyId);
  return deleteSupply;
};

export const DeleteSuppliesBulk = async (ids) => {
  const deleteSuppliesBulk = await deleteSupplyBulkService(ids);
  return deleteSuppliesBulk;
};
