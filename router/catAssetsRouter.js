import express from 'express';
import CatActivosControllers from '../controllers/catAssetsControllers.js';
import { verificarToken } from '../middleware/verificarToken.js';
const apiCatActivos = express.Router();

/**
 * @swagger
 * /lista-activos:
 *   get:
 *     summary: Obtiene la lista de activos
 *     description: Devuelve todos los activos con estado "Activo" en el catálogo.
 *     tags:
 *        - Catálogo de Activos
 *     responses:
 *       200:
 *         description: Lista de activos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del activo
 *                   nombre:
 *                     type: string
 *                     description: Nombre del activo
 *                   status:
 *                     type: string
 *                     description: Estado del activo (esperado "Activo")
 *       404:
 *         description: No se encontró ningún activo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No hay nada en los activos
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

apiCatActivos.get(
  '/lista-activos',
  CatActivosControllers.ObtenerTodosLosActivos
);

/**
 * @swagger
 * /lista-activos-desuso:
 *   get:
 *     summary: Obtiene la lista de activos en desuso
 *     description: Devuelve todos los activos con estado "Inactivo" en el catálogo.
 *     tags:
 *       - Catálogo de Activos
 *     responses:
 *       200:
 *         description: Lista de activos en desuso obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del activo
 *                   nombre:
 *                     type: string
 *                     description: Nombre del activo
 *                   status:
 *                     type: string
 *                     description: Estado del activo (esperado "Inactivo")
 *       404:
 *         description: No se encontró ningún activo en desuso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No hay nada en los activos no ocupados
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

apiCatActivos.get(
  '/lista-activos-desuso',
  CatActivosControllers.ObtenerTodosLosActivosDesuso
);

/**
 * @swagger
 * /agregar-activo:
 *   post:
 *     summary: Agrega un nuevo activo al catálogo
 *     description: Crea un nuevo registro de activo en el catálogo con la información proporcionada.
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
 *                 description: Nombre del activo
 *               description:
 *                 type: string
 *                 description: Descripción del activo
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de compra del activo
 *               cost:
 *                 type: number
 *                 format: float
 *                 description: Costo del activo
 *               location:
 *                 type: string
 *                 description: Ubicación del activo
 *               condition:
 *                 type: string
 *                 description: Condición actual del activo
 *               lastMaintenanceDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de la última manutención
 *               warrantyEndDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización de la garantía
 *             required:
 *               - name
 *               - description
 *               - purchaseDate
 *               - cost
 *               - location
 *               - condition
 *               - lastMaintenanceDate
 *               - warrantyEndDate
 *     responses:
 *       201:
 *         description: Activo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El activo fue creado con exito
 *       400:
 *         description: Error en los datos de entrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Los campos son requeridos
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

apiCatActivos.post('/agregar-activo', CatActivosControllers.InsertarActivo);

/**
 * @swagger
 * /actualizar-activo:
 *   put:
 *     summary: Actualiza un activo en el catálogo
 *     description: Modifica los detalles de un activo existente en el catálogo utilizando su ID.
 *     tags:
 *       - Catálogo de Activos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del activo a actualizar
 *               name:
 *                 type: string
 *                 description: Nombre del activo
 *               description:
 *                 type: string
 *                 description: Descripción del activo
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de compra del activo
 *               cost:
 *                 type: number
 *                 format: float
 *                 description: Costo del activo
 *               location:
 *                 type: string
 *                 description: Ubicación del activo
 *               condition:
 *                 type: string
 *                 description: Condición actual del activo
 *               status:
 *                 type: string
 *                 description: Estado actual del activo (ej. "Activo" o "Inactivo")
 *               lastMaintenanceDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de la última manutención
 *               warrantyEndDate:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización de la garantía
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Activo actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se actualizo el activo
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

apiCatActivos.put('/actualizar-activo', CatActivosControllers.EditarActivo);

/**
 * @swagger
 * /eliminar-activo/{id}:
 *   delete:
 *     summary: Elimina un activo del catálogo
 *     description: Elimina un activo específico del catálogo utilizando su ID.
 *     tags:
 *       - Catálogo de Activos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del activo a eliminar
 *     responses:
 *       200:
 *         description: Activo eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se eliminó correctamente el activo
 *       400:
 *         description: ID no válido o faltante
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se envió el ID o no es válido
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
apiCatActivos.delete(
  '/eliminar-activo/:id',
  CatActivosControllers.EliminarActivo
);

export { apiCatActivos };
