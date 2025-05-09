import express from "express";

import CatActivosControllers from "../controllers/catAssetsControllers.js";
import { verificarToken } from "../middleware/verificarToken.js";

const apiCatActivos = express.Router();

/**
 * @swagger
 * /lista-activos:
 *   get:
 *     summary: Obtener activos activos
 *     description: Recupera una lista de todos los activos que están marcados como activos en la base de datos.
 *     tags:
 *       - Catálogo de Activos
 *     responses:
 *       200:
 *         description: Lista de activos activos recuperada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del activo.
 *                   name:
 *                     type: string
 *                     description: Nombre del activo.
 *                   description:
 *                     type: string
 *                     description: Descripción del activo.
 *                   purchaseDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de compra del activo.
 *                   cost:
 *                     type: number
 *                     description: Costo del activo.
 *                   location:
 *                     type: string
 *                     description: Ubicación del activo.
 *                   condition:
 *                     type: string
 *                     description: Condición del activo.
 *                   status:
 *                     type: string
 *                     description: Estado del activo.
 *                   lastMaintenanceDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de la última mantenimiento del activo.
 *                   warrantyEndDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de finalización de la garantía del activo.
 *       404:
 *         description: No se encontraron activos activos.
 *       500:
 *         description: Error interno del servidor.
 */
apiCatActivos.get(
  "/lista-activos",
  verificarToken,
  CatActivosControllers.ObtenerTodosLosActivos,
);

/**
 * @swagger
 * /lista-activos-desuso:
 *   get:
 *     summary: Obtener activos en desuso
 *     description: Recupera una lista de todos los activos que están marcados como inactivos en la base de datos.
 *     tags:
 *       - Catálogo de Activos
 *     responses:
 *       200:
 *         description: Lista de activos inactivos recuperada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del activo.
 *                   name:
 *                     type: string
 *                     description: Nombre del activo.
 *                   description:
 *                     type: string
 *                     description: Descripción del activo.
 *                   purchaseDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de compra del activo.
 *                   cost:
 *                     type: number
 *                     description: Costo del activo.
 *                   location:
 *                     type: string
 *                     description: Ubicación del activo.
 *                   condition:
 *                     type: string
 *                     description: Condición del activo.
 *                   status:
 *                     type: string
 *                     description: Estado del activo.
 *                   lastMaintenanceDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de la última mantenimiento del activo.
 *                   warrantyEndDate:
 *                     type: string
 *                     format: date
 *                     description: Fecha de finalización de la garantía del activo.
 *       404:
 *         description: No se encontraron activos en desuso.
 *       500:
 *         description: Error interno del servidor.
 */

apiCatActivos.get(
  "/lista-activos-desuso",
  verificarToken,
  CatActivosControllers.ObtenerTodosLosActivosDesuso,
);

/**
 * @swagger
 * /agregar-activo:
 *   post:
 *     summary: Agregar un nuevo activo
 *     description: Inserta un nuevo activo en la base de datos con la información proporcionada.
 *     tags:
 *       - Catálogo de Activos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del activo.
 *               description:
 *                 type: string
 *                 description: Descripción del activo.
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de compra del activo.
 *               cost:
 *                 type: number
 *                 description: Costo del activo.
 *               location:
 *                 type: string
 *                 description: Ubicación del activo.
 *               condition:
 *                 type: string
 *                 description: Condición del activo.
 *               lastMaintenanceDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de la última mantenimiento del activo.
 *               warrantyEndDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización de la garantía del activo.
 *     responses:
 *       201:
 *         description: El recurso fue creado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Activo agregado correctamente.'
 *       400:
 *         description: Se produjo un error en la solicitud. Verifique que todos los campos sean válidos.
 *       500:
 *         description: Error interno del servidor.
 */

apiCatActivos.post(
  "/agregar-activo",
  verificarToken,
  CatActivosControllers.InsertarActivo,
);

/**
 * @swagger
 * /actualizar-activo:
 *   put:
 *     summary: Actualizar un activo
 *     description: Actualiza la información de un activo en la base de datos utilizando el ID y otros datos.
 *     tags:
 *       - Catálogo de Activos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *               cost:
 *                 type: number
 *               location:
 *                 type: string
 *               condition:
 *                 type: string
 *               status:
 *                 type: string
 *               lastMaintenanceDate:
 *                 type: string
 *                 format: date
 *               warrantyEndDate:
 *                 type: string
 *                 format: date
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: El recurso fue actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'El recurso fue actualizado correctamente.'
 *       404:
 *         description: No se encontró el recurso para actualizar.
 *       400:
 *         description: Se produjo un error en la solicitud.
 *       500:
 *         description: Error interno del servidor.
 */

apiCatActivos.put(
  "/actualizar-activo",
  verificarToken,
  CatActivosControllers.EditarActivo,
);

/**
 * @swagger
 * /borrar-activo-boveda/{id}:
 *   put:
 *     summary: Mover un activo a la bóveda de eliminados
 *     description: Actualiza el estado de un activo a 'Inactivo', moviéndolo a la bóveda de eliminados.
 *     tags:
 *       - Catálogo de Activos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del activo que se desea mover a la bóveda de eliminados.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: El recurso fue mandado a la boveda correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'El recurso fue mandado a la boveda correctamente.'
 *       404:
 *         description: El activo no fue encontrado.
 *       400:
 *         description: Se produjo un error en la solicitud.
 *       500:
 *         description: Error interno del servidor.
 */

apiCatActivos.put(
  "/borrar-activo-boveda/:id",
  verificarToken,
  CatActivosControllers.MoverABovedaEliminados,
);

/**
 * @swagger
 * /eliminar-activo/{id}:
 *   delete:
 *     summary: Eliminar un activo
 *     description: Elimina un activo de la base de datos utilizando su ID.
 *     tags:
 *       - Catálogo de Activos
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del activo que se desea eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: El recurso fue eliminado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'El recurso fue eliminado correctamente.'
 *       404:
 *         description: El activo no fue encontrado.
 *       400:
 *         description: Se produjo un error en la solicitud.
 *       500:
 *         description: Error interno del servidor.
 */
apiCatActivos.delete(
  "/eliminar-activo/:id",
  verificarToken,
  CatActivosControllers.EliminarActivo,
);

export { apiCatActivos };
