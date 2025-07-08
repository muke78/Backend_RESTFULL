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
import {
  bulkDeleteAssetsRateLimiter,
  createAssetsRateLimiter,
  deleteAssetsRateLimiter,
  listAssetsRateLimiter,
  moveToVaultAssetDeletedRateLimit,
  searchAssetsRateLimiter,
  updateAssetsRateLimiter,
} from "../helpers/rateLimit/assets.rateLimit.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatAssets = express.Router();

/**
 * @swagger
 * /assets?:
 *   get:
 *     summary: Obtener todos los activos según filtros opcionales
 *     description: Retorna una lista de activos filtrados por costo, límite de costo, ubicación, condición y estatus. Si algún filtro tiene el valor "All", no se aplica.
 *     tags:
 *       - Catálogo Activos
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: cost
 *         required: false
 *         schema:
 *           type: number
 *           example: 950.00
 *         description: Costo mínimo del activo o costo exacto si no se proporciona `limitCost`
 *       - in: query
 *         name: limitCost
 *         required: false
 *         schema:
 *           type: number
 *           example: 6000
 *         description: Costo máximo del activo (usado junto con `cost` para un rango)
 *       - in: query
 *         name: location
 *         required: false
 *         schema:
 *           type: string
 *           example: Aula 4
 *         description: Ubicación del activo (ej. "Aula 4", "Laboratorio")
 *       - in: query
 *         name: condition
 *         required: false
 *         schema:
 *           type: string
 *           example: Regular
 *         description: Condición del activo (ej. "Nuevo", "Regular", "Dañado")
 *       - in: query
 *         name: status
 *         required: false
 *         schema:
 *           type: string
 *           example: Activo
 *         description: Estado del activo (ej. "Activo", "Inactivo", "All")
 *     responses:
 *       200:
 *         description: Lista de activos encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ID:
 *                         type: string
 *                         format: uuid
 *                       Name:
 *                         type: string
 *                       Description:
 *                         type: string
 *                       PurchaseDate:
 *                         type: string
 *                         format: date-time
 *                       Cost:
 *                         type: string
 *                         example: "950.00"
 *                       Location:
 *                         type: string
 *                       Condition:
 *                         type: string
 *                       Status:
 *                         type: string
 *                       LastMaintenanceDate:
 *                         type: string
 *                         format: date-time
 *                       WarrantyEndDate:
 *                         type: string
 *                         format: date-time
 *                       Created:
 *                         type: string
 *                         format: date-time
 *                       Updated:
 *                         type: string
 *                         format: date-time
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: string
 *                       example: "1"
 *       404:
 *         description: No se encontraron activos con los filtros proporcionados
 *       500:
 *         description: Error interno del servidor
 */

// GET /api/assets/list_of_assets
apiCatAssets.get(
  "/",
  verificarToken,
  listAssetsRateLimiter,
  async (request, response, next) => {
    try {
      const listAssets = request.query;
      const result = await GetAllAssets(listAssets);
      methodOK(request, response, result);
    } catch (error) {
      next(error);
    }
  },
);

/**
 * @swagger
 * /assets/search?:
 *   get:
 *     summary: Buscar un activo por su nombre
 *     description: Retorna la información de uno o varios activos que coincidan parcialmente con el nombre proporcionado.
 *     tags:
 *       - Catálogo Activos
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *           example: Comoda
 *         description: Nombre (o parte del nombre) del activo a buscar
 *     responses:
 *       200:
 *         description: Busqueda realizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Busqueda realizada correctamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ID:
 *                         type: string
 *                         format: uuid
 *                         example: 11d1b03c-5bbb-11f0-ac03-d843ae0db894
 *                       Name:
 *                         type: string
 *                         example: Comoda
 *                       Description:
 *                         type: string
 *                         example: Comoda de madera de tres cajones
 *                       PurchaseDate:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-05-10T06:00:00.000Z
 *                       Cost:
 *                         type: string
 *                         example: "50.00"
 *                       Location:
 *                         type: string
 *                         example: Aula 1
 *                       Condition:
 *                         type: string
 *                         example: Bueno
 *                       Status:
 *                         type: string
 *                         example: Inactivo
 *                       LastMaintenanceDate:
 *                         type: string
 *                         format: date-time
 *                         example: 2024-07-10T06:00:00.000Z
 *                       WarrantyEndDate:
 *                         type: string
 *                         format: date-time
 *                         example: 2026-05-10T06:00:00.000Z
 *                       Created:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-07-08T05:19:06.000Z
 *                       Updated:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-07-08T08:47:13.000Z
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: string
 *                       example: "1"
 *       400:
 *         description: Debe proporcionar un nombre del activo para buscar
 *       404:
 *         description: No se encontró ningún activo con el nombre proporcionado
 *       500:
 *         description: Error interno del servidor
 */

// GET /api/assets/search
apiCatAssets.get(
  "/search",
  verificarToken,
  searchAssetsRateLimiter,
  async (request, response, next) => {
    try {
      const { name } = request.query;
      const result = await SearchOfAssets(name);
      methodOK(request, response, result, "Busqueda realizada correctamente");
    } catch (error) {
      next(error);
    }
  },
);

// POST /api/assets/create
apiCatAssets.post(
  "/",
  verificarToken,
  createAssetsRateLimiter,
  async (request, response, next) => {
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
  },
);

// PUT /api/assets/update/:id
apiCatAssets.put(
  "/:id",
  verificarToken,
  updateAssetsRateLimiter,
  async (request, response, next) => {
    try {
      const assetId = request.params.id;
      const assetsData = request.body;
      const result = await UpdateAssets(assetId, assetsData);
      methodOK(
        request,
        response,
        result,
        "El activo se actualizo correctamente",
      );
    } catch (error) {
      next(error);
    }
  },
);

// PUT /api/assets/vault/:id
apiCatAssets.put(
  "/vault/:id",
  verificarToken,
  moveToVaultAssetDeletedRateLimit,
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

//DELETE /api/assets/bulk-delete-assets
apiCatAssets.delete(
  "/bulk",
  verificarToken,
  bulkDeleteAssetsRateLimiter,
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
apiCatAssets.delete(
  "/:id",
  verificarToken,
  deleteAssetsRateLimiter,
  async (request, response, next) => {
    try {
      const assetId = request.params.id;
      const result = await DeleteAsset(assetId);
      methodOK(
        request,
        response,
        result,
        "El activo fue eliminado correctamente",
      );
    } catch (error) {
      next(error);
    }
  },
);

export { apiCatAssets };
