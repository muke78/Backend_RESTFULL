import {
  deleteUnitService,
  insertUnitService,
  listUnitService,
  updateUnitService,
} from "../../../services/units/index.js";

export const GetAllUnits = async () => {
  const listGetAllUnits = await listUnitService();
  return listGetAllUnits;
};

export const InsertUnit = async (units) => {
  const insertUnit = await insertUnitService(units);
  return insertUnit;
};

export const UpdateUnit = async (unitId, unitData) => {
  const updateUnit = await updateUnitService(unitId, unitData);
  return updateUnit;
};

export const DeleteUnit = async (unitId) => {
  const deleteUnit = await deleteUnitService(unitId);
  return deleteUnit;
};
