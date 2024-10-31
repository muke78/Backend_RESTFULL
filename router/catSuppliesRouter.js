import express from "express";

import CatInsumosControllers from "../controllers/catSuppliesControllers.js";
import { verificarToken } from "../middleware/verificarToken.js";

const apiCatInsumos = express.Router();

/**
 * @swagger
 * /lista-insumos:
 *   get:
 *     summary: Obtiene la lista completa de insumos activos
 *     description: Recupera todos los insumos cuyo estado es "Activo" en la base de datos.
 *     tags:
 *       - Catálogo Insumos
 *     responses:
 *       200:
 *         description: Lista completa de insumos activos obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174000"
 *                   itemCode:
 *                     type: string
 *                     example: "S1001"
 *                   name:
 *                     type: string
 *                     example: "Papel para impresora"
 *                   description:
 *                     type: string
 *                     example: "Paquete de 500 hojas"
 *                   quantity:
 *                     type: integer
 *                     example: 50
 *                   supplier:
 *                     type: string
 *                     example: "Office Supplies Co."
 *                   location:
 *                     type: string
 *                     example: "Almacén A"
 *                   condition:
 *                     type: string
 *                     example: "Nuevo"
 *                   purchaseDate:
 *                     type: string
 *                     format: date
 *                     example: "2023-07-10"
 *                   status:
 *                     type: string
 *                     example: "Activo"
 *       404:
 *         description: No se encontraron insumos activos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontraron insumos activos."
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al procesar la solicitud."
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
 *     summary: Obtiene la lista completa de insumos en desuso
 *     description: Recupera todos los insumos cuyo estado es "Inactivo" en la base de datos.
 *     tags:
 *       - Catálogo Insumos
 *     responses:
 *       200:
 *         description: Lista completa de insumos en desuso obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174000"
 *                   itemCode:
 *                     type: string
 *                     example: "S1002"
 *                   name:
 *                     type: string
 *                     example: "Toner de impresora"
 *                   description:
 *                     type: string
 *                     example: "Toner compatible para impresoras HP"
 *                   quantity:
 *                     type: integer
 *                     example: 0
 *                   supplier:
 *                     type: string
 *                     example: "Toner Supplies Inc."
 *                   location:
 *                     type: string
 *                     example: "Almacén B"
 *                   condition:
 *                     type: string
 *                     example: "Usado"
 *                   purchaseDate:
 *                     type: string
 *                     format: date
 *                     example: "2022-05-15"
 *                   status:
 *                     type: string
 *                     example: "Inactivo"
 *       404:
 *         description: No se encontraron insumos en desuso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontraron insumos en desuso."
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al procesar la solicitud."
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
 *     summary: Agrega un nuevo insumo
 *     description: Crea un nuevo insumo en la base de datos con los detalles proporcionados.
 *     tags:
 *       - Catálogo Insumos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Toner de impresora"
 *               description:
 *                 type: string
 *                 example: "Toner compatible para impresoras HP"
 *               quantity:
 *                 type: integer
 *                 example: 10
 *               unit:
 *                 type: string
 *                 example: "Unidad"
 *               supplier:
 *                 type: string
 *                 example: "Toner Supplies Inc."
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2022-05-15"
 *               expiryDate:
 *                 type: string
 *                 format: date
 *                 example: "2023-05-15"
 *               cost:
 *                 type: number
 *                 format: float
 *                 example: 29.99
 *     responses:
 *       201:
 *         description: Insumo agregado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El insumo fue agregado correctamente."
 *       400:
 *         description: Petición incorrecta, falta información necesaria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Faltan campos obligatorios."
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al procesar la solicitud."
 */

apiCatInsumos.post(
  "/agregar-insumo",
  verificarToken,
  CatInsumosControllers.InsertarInsumo,
);

/**
 * @swagger
 * /apiCatInsumos/actualizar-insumo:
 *   put:
 *     summary: Actualiza un insumo existente
 *     description: Modifica los detalles de un insumo en la base de datos.
 *     tags:
 *       - Catálogo Insumos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "uuid-insumo-a-actualizar"
 *               name:
 *                 type: string
 *                 example: "Toner de impresora"
 *               description:
 *                 type: string
 *                 example: "Toner compatible para impresoras HP"
 *               quantity:
 *                 type: integer
 *                 example: 10
 *               unit:
 *                 type: string
 *                 example: "Unidad"
 *               supplier:
 *                 type: string
 *                 example: "Toner Supplies Inc."
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2022-05-15"
 *               expiryDate:
 *                 type: string
 *                 format: date
 *                 example: "2023-05-15"
 *               cost:
 *                 type: number
 *                 format: float
 *                 example: 29.99
 *               status:
 *                 type: string
 *                 example: "Activo"
 *     responses:
 *       200:
 *         description: Insumo actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El recurso fue actualizado correctamente."
 *       404:
 *         description: No se encontró el recurso para actualizar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró el recurso para actualizar."
 *       400:
 *         description: Petición incorrecta, falta información necesaria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Faltan campos obligatorios."
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al procesar la solicitud."
 */

apiCatInsumos.put(
  "/actualizar-insumo",
  verificarToken,
  CatInsumosControllers.EditarInsumo,
);

/**
 * @swagger
 * /mover-insumo-boveda/{id}:
 *   put:
 *     summary: Mueve un insumo a la bóveda de eliminados
 *     description: Cambia el estado de un insumo a "Inactivo" para moverlo a la bóveda de eliminados.
 *     tags:
 *       - Catálogo Insumos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID único del insumo que se desea mover a la bóveda
 *     responses:
 *       200:
 *         description: Insumo movido a la bóveda exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El recurso fue mandado a la boveda correctamente."
 *       404:
 *         description: No se encontró el recurso para mover a la bóveda.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró el recurso para mover a la bóveda."
 *       400:
 *         description: Petición incorrecta, falta información necesaria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Falta el ID del insumo."
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al procesar la solicitud."
 */

apiCatInsumos.put(
  "/mover-insumo-boveda/:id",
  verificarToken,
  CatInsumosControllers.MoverABovedaEliminados,
);

/**
 * @swagger
 * /eliminar-insumo/{id}:
 *   delete:
 *     summary: Elimina un insumo permanentemente
 *     description: Elimina un insumo de la base de datos usando su ID único.
 *     tags:
 *       - Catálogo Insumos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID único del insumo que se desea eliminar
 *     responses:
 *       200:
 *         description: Insumo eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El recurso fue eliminado correctamente."
 *       404:
 *         description: No se encontró el insumo para eliminar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró el recurso para eliminar."
 *       400:
 *         description: Petición incorrecta, falta información necesaria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Falta el ID del insumo."
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al procesar la solicitud."
 */

apiCatInsumos.delete(
  "/eliminar-insumo/:id",
  verificarToken,
  CatInsumosControllers.EliminarInsumo,
);

export { apiCatInsumos };
