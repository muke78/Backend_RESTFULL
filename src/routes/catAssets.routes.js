import express from "express";

import {
  DeleteAsset,
  DeleteAssetsBulk,
  GetAllAssets,
  InsertAssets,
  MoveToVaultAssetDeleted,
  SearchOfAssets,
  UpdateAssets,
} from "../controllers/assets/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatAssets = express.Router();

// GET /api/assets/list_of_assets
apiCatAssets.get("/", verificarToken, async (request, response, next) => {
  try {
    const listAssets = request.query;
    const result = await GetAllAssets(listAssets);
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// GET /api/assets/search
apiCatAssets.get("/search", verificarToken, async (request, response, next) => {
  try {
    const { name } = request.query;
    const result = await SearchOfAssets(name);
    methodOK(request, response, result, "Busqueda realizada correctamente");
  } catch (error) {
    next(error);
  }
});

// POST /api/assets/create
apiCatAssets.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertAssets = request.body;
    const result = await InsertAssets(insertAssets);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamente el activo",
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/assets/vault/:id
apiCatAssets.put(
  "/vault/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const assetId = request.params.id;
      const result = await MoveToVaultAssetDeleted(assetId);
      methodOK(
        request,
        response,
        result,
        "El activo se mando a la boveda de eliminados",
      );
    } catch (error) {
      next(error);
    }
  },
);

// PUT /api/assets/update/:id
apiCatAssets.put("/:id", verificarToken, async (request, response, next) => {
  try {
    const assetId = request.params.id;
    const assetsData = request.body;
    const result = await UpdateAssets(assetId, assetsData);
    methodOK(request, response, result, "El activo se actualizo correctamente");
  } catch (error) {
    next(error);
  }
});

//DELETE /api/assets/bulk-delete-assets
apiCatAssets.delete(
  "/bulk",
  verificarToken,
  async (request, response, next) => {
    try {
      const { ids } = request.body;
      await DeleteAssetsBulk(ids);
      methodOK(request, response, {
        message: `Se eliminaron ${request.body.ids.length} activos correctamente`,
      });
    } catch (error) {
      next(error);
    }
  },
);

//DELETE /api/assets/delete/:id
apiCatAssets.delete("/:id", verificarToken, async (request, response, next) => {
  try {
    const assetId = request.params.id;
    const result = await DeleteAsset(assetId);
    methodOK(
      request,
      response,
      undefined,
      `El activo ${result.name} fue eliminado correctamente`,
    );
  } catch (error) {
    next(error);
  }
});

export { apiCatAssets };
