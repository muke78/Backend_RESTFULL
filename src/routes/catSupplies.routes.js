import express from "express";

import {
  DeleteSuppliesBulk,
  DeleteSupply,
  GetAllSupplies,
  InsertSupplies,
  MoveToVaultSupplyDeleted,
  SearchOfSupplies,
  UpdateSupplies,
} from "../controllers/supply/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatSupply = express.Router();

// GET /api/supplies/list_of_supplies
apiCatSupply.get("/", verificarToken, async (request, response, next) => {
  try {
    const listSupplies = request.query;
    const result = await GetAllSupplies(listSupplies);
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// GET /api/supplies/search

apiCatSupply.get("/search", verificarToken, async (request, response, next) => {
  try {
    const { name } = request.query;
    const result = await SearchOfSupplies(name);
    methodOK(request, response, result, "Busqueda realizada correctamnete");
  } catch (error) {
    next(error);
  }
});

// POST /api/supplies/create
apiCatSupply.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertSupplies = request.body;
    const result = await InsertSupplies(insertSupplies);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamnete el suministro",
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/supplies/vault/:id
apiCatSupply.put(
  "/vault/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const supplyId = request.params.id;
      const result = await MoveToVaultSupplyDeleted(supplyId);
      methodOK(
        request,
        response,
        result,
        "El sumistro se mando a la boveda de eliminados",
      );
    } catch (error) {
      next(error);
    }
  },
);

// PUT /api/supplies/update/:id
apiCatSupply.put("/:id", verificarToken, async (request, response, next) => {
  try {
    const supplyId = request.params.id;
    const supplyData = request.body;
    const result = await UpdateSupplies(supplyId, supplyData);
    methodOK(
      request,
      response,
      result,
      "El suministro se actualizo correctamente",
    );
  } catch (error) {
    next(error);
  }
});

//DELETE /api/supplies/bulk-delete-supplies
apiCatSupply.delete(
  "/bulk",
  verificarToken,
  async (request, response, next) => {
    try {
      const { ids } = request.body;
      await DeleteSuppliesBulk(ids);
      methodOK(request, response, {
        message: `Se eliminaron ${request.body.ids.length} suministros correctamente`,
      });
    } catch (error) {
      next(error);
    }
  },
);

//DELETE /api/supplies/delete/:id
apiCatSupply.delete("/:id", verificarToken, async (request, response, next) => {
  try {
    const supplyId = request.params.id;
    const result = await DeleteSupply(supplyId);
    methodOK(
      request,
      response,
      undefined,
      `El suministro ${result.name} fue eliminado correctamente`,
    );
  } catch (error) {
    next(error);
  }
});

export { apiCatSupply };
