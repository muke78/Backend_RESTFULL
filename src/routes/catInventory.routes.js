import express from "express";

import {
  DeleteInventoriesBulk,
  DeleteInventory,
  GetAllInventories,
  InsertInventories,
  MoveToVaultInventoryDeleted,
  SearchOfInventories,
  UpdateInventories,
} from "../controllers/inventory/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatInventory = express.Router();

// GET /api/inventories/list_of_inventories
apiCatInventory.get("/", verificarToken, async (request, response, next) => {
  try {
    const listInventories = request.query;
    const result = await GetAllInventories(listInventories);
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// GET /api/inventories/search
apiCatInventory.get(
  "/search",
  verificarToken,
  async (request, response, next) => {
    try {
      const { name } = request.query;
      const result = await SearchOfInventories(name);
      methodOK(request, response, result, "Busqueda realizada correctamente");
    } catch (error) {
      next(error);
    }
  },
);

// POST /api/inventories/create
apiCatInventory.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertInventories = request.body;
    const result = await InsertInventories(insertInventories);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamente el inventario",
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/inventories/vault/:id
apiCatInventory.put(
  "/vault/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const inventoryId = request.params.id;
      const result = await MoveToVaultInventoryDeleted(inventoryId);
      methodOK(
        request,
        response,
        result,
        "El inventario se mando a la boveda de eliminados",
      );
    } catch (error) {
      next(error);
    }
  },
);

// PUT /api/inventories/update/:id
apiCatInventory.put("/:id", verificarToken, async (request, response, next) => {
  try {
    const inventoryId = request.params.id;
    const inventoryData = request.body;
    const result = await UpdateInventories(inventoryId, inventoryData);
    methodOK(
      request,
      response,
      result,
      "El inventario se actualizo correctamente",
    );
  } catch (error) {
    next(error);
  }
});

//DELETE /api/inventories/bulk-delete-inventories
apiCatInventory.delete(
  "/bulk",
  verificarToken,
  async (request, response, next) => {
    try {
      const { ids } = request.body;
      await DeleteInventoriesBulk(ids);
      methodOK(request, response, {
        message: `Se eliminaron ${request.body.ids.length} inventarios correctamente`,
      });
    } catch (error) {
      next(error);
    }
  },
);

//DELETE /api/inventories/delete/:id
apiCatInventory.delete(
  "/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const inventoryId = request.params.id;
      const result = await DeleteInventory(inventoryId);
      methodOK(
        request,
        response,
        result,
        "El inventario fue eliminado correctamente",
      );
    } catch (error) {
      next(error);
    }
  },
);

export { apiCatInventory };
