import express from "express";

import CatInsumosControllers from "../controllers/catSuppliesControllers.js";
import { verificarToken } from "../middleware/verificarToken.js";

const apiCatInsumos = express.Router();
/**
 * @swagger
 * /lista-insumos:
 *   get:
 *     summary: Obtener todo el inventario
 *     description: Retorna una lista de todos los insumos en la base de datos.
 *     tags:
 *       - Catálogo de Insumo
 *     responses:
 *       200:
 *         description: Lista de insumos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: string
 *                     description: ID único del insumo
 *                   Name:
 *                     type: string
 *                     description: Nombre del insumo
 *                   Description:
 *                     type: string
 *                     description: Descripción del insumo
 *                   Quantity:
 *                     type: integer
 *                     description: Cantidad del insumo
 *                   Unit:
 *                     type: string
 *                     description: Unidad de medida del insumo
 *                   Supplier:
 *                     type: string
 *                     description: Proveedor del insumo
 *                   PurchaseDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de compra del insumo
 *                   ExpiryDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de expiración del insumo
 *                   Cost:
 *                     type: number
 *                     description: Costo del insumo
 *       404:
 *         description: No se encontraron insumos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No hay nada en los insumos
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error interno del servidor
 */

apiCatInsumos.get(
  "/lista-insumos",
  verificarToken,
  CatInsumosControllers.ObtenerTodosLosInsumos,
);

/**
 * @swagger
 * /lista-insumos-desuso:
 *   get:
 *     summary: Obtiene la lista de insumos en desuso
 *     description: Devuelve todos los insumos con estado "Inactivo" en el catálogo.
 *     tags:
 *      - Catálogo de Insumo
 *     responses:
 *       200:
 *         description: Lista de insumos en desuso obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del insumo
 *                   nombre:
 *                     type: string
 *                     description: Nombre del insumo
 *                   status:
 *                     type: string
 *                     description: Estado del insumo (esperado "Inactivo")
 *       404:
 *         description: No se encontró ningún insumo en desuso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No hay nada en los insumos en desuso
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error interno del servidor
 */

apiCatInsumos.get(
  "/lista-insumos-desuso",
  verificarToken,
  CatInsumosControllers.ObtenerTodosLosInsumosDesuso,
);

/**
 * @swagger
 * /agregar-insumo:
 *   post:
 *     summary: Agrega un nuevo insumo al catálogo
 *     description: Inserta un nuevo insumo en la base de datos.
 *     tags:
 *       - Catálogo de Insumo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del insumo
 *               description:
 *                 type: string
 *                 description: Descripción del insumo
 *               quantity:
 *                 type: integer
 *                 description: Cantidad del insumo
 *               unit:
 *                 type: string
 *                 description: Unidad de medida del insumo
 *               supplier:
 *                 type: string
 *                 description: Proveedor del insumo
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de compra del insumo
 *               expiryDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de expiración del insumo
 *               cost:
 *                 type: number
 *                 description: Costo del insumo
 *     responses:
 *       201:
 *         description: El insumo fue creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El insumo fue creado con exito
 *       400:
 *         description: Faltan campos requeridos en el cuerpo de la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Los campos son requeridos
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error interno del servidor
 */

apiCatInsumos.post(
  "/agregar-insumo",
  verificarToken,
  CatInsumosControllers.InsertarInsumo,
);

/**
 * @swagger
 * /actualizar-insumo:
 *   put:
 *     summary: Actualiza un insumo en el catálogo
 *     description: Actualiza los detalles de un insumo existente en la base de datos.
 *     tags:
 *       - Catálogo de Insumo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del insumo que se va a actualizar
 *               name:
 *                 type: string
 *                 description: Nombre del insumo
 *               description:
 *                 type: string
 *                 description: Descripción del insumo
 *               quantity:
 *                 type: integer
 *                 description: Cantidad del insumo
 *               unit:
 *                 type: string
 *                 description: Unidad de medida del insumo
 *               supplier:
 *                 type: string
 *                 description: Proveedor del insumo
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de compra del insumo
 *               expiryDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de expiración del insumo
 *               cost:
 *                 type: number
 *                 description: Costo del insumo
 *     responses:
 *       200:
 *         description: El insumo fue actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se actualizo el insumo
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error interno del servidor
 */

apiCatInsumos.put("/actualizar-insumo", CatInsumosControllers.EditarInsumo);

/**
 * @swagger
 * /eliminar-insumo/{id}:
 *   delete:
 *     summary: Elimina un insumo del catálogo
 *     description: Elimina un insumo existente de la base de datos utilizando su ID.
 *     tags:
 *       - Catálogo de Insumo
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del insumo que se desea eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: El insumo fue eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se elimino correctamente el insumo
 *       400:
 *         description: No se envió el ID o no es válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se envió el ID o no es válido
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error interno del servidor
 */

apiCatInsumos.delete(
  "/eliminar-insumo/:id",
  verificarToken,
  CatInsumosControllers.EliminarInsumo,
);

export { apiCatInsumos };
