import express from "express";

import CatInventarioControllers from "../controllers/catInventarioControllers.js";
import { verificarToken } from "../middleware/verificarToken.js";

const apiCatInventario = express.Router();

/**
 * @swagger
 * /lista-inventario:
 *   get:
 *     summary: Obtiene la lista completa del inventario activo
 *     description: Recupera todos los elementos en el inventario cuyo estado es "Activo".
 *     tags:
 *       - CatInventario
 *     responses:
 *       200:
 *         description: Lista completa del inventario activo obtenida exitosamente.
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
 *                     example: "A1001"
 *                   name:
 *                     type: string
 *                     example: "Laptop Dell"
 *                   description:
 *                     type: string
 *                     example: "Laptop de 15 pulgadas"
 *                   quantity:
 *                     type: integer
 *                     example: 10
 *                   weight:
 *                     type: number
 *                     format: float
 *                     example: 2.5
 *                   width:
 *                     type: number
 *                     format: float
 *                     example: 35.0
 *                   height:
 *                     type: number
 *                     format: float
 *                     example: 24.0
 *                   location:
 *                     type: string
 *                     example: "Depósito principal"
 *                   condition:
 *                     type: string
 *                     example: "Nuevo"
 *                   purchaseDate:
 *                     type: string
 *                     format: date
 *                     example: "2022-05-15"
 *                   status:
 *                     type: string
 *                     example: "Activo"
 *       404:
 *         description: No se encontró inventario activo.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró inventario activo."
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

apiCatInventario.get(
  "/lista-inventario",
  verificarToken,
  CatInventarioControllers.ObtenerTodoElInnventario,
);

/**
 * @swagger
 * /lista-inventario-desuso:
 *   get:
 *     summary: Obtiene la lista de inventario en desuso
 *     description: Recupera todos los elementos en el inventario cuyo estado es "Inactivo".
 *     tags:
 *       - CatInventario
 *     responses:
 *       200:
 *         description: Lista de inventario en desuso obtenida exitosamente.
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
 *                     example: "B2002"
 *                   name:
 *                     type: string
 *                     example: "Monitor Samsung"
 *                   description:
 *                     type: string
 *                     example: "Monitor de 24 pulgadas"
 *                   quantity:
 *                     type: integer
 *                     example: 5
 *                   weight:
 *                     type: number
 *                     format: float
 *                     example: 3.2
 *                   width:
 *                     type: number
 *                     format: float
 *                     example: 54.6
 *                   height:
 *                     type: number
 *                     format: float
 *                     example: 32.1
 *                   location:
 *                     type: string
 *                     example: "Oficina 3"
 *                   condition:
 *                     type: string
 *                     example: "Usado"
 *                   purchaseDate:
 *                     type: string
 *                     format: date
 *                     example: "2021-08-10"
 *                   status:
 *                     type: string
 *                     example: "Inactivo"
 *       404:
 *         description: No se encontró inventario en desuso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró inventario en desuso."
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

apiCatInventario.get(
  "/lista-inventario-desuso",
  verificarToken,
  CatInventarioControllers.ObtenerInventarioDesuso,
);

/**
 * @swagger
 * /agregar-inventario:
 *   post:
 *     summary: Agrega un nuevo registro al inventario
 *     description: Crea un nuevo activo en el inventario con los datos proporcionados en el cuerpo de la solicitud.
 *     tags:
 *       - CatInventario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemCode:
 *                 type: string
 *                 example: "B2002"
 *               name:
 *                 type: string
 *                 example: "Monitor Samsung"
 *               description:
 *                 type: string
 *                 example: "Monitor de 24 pulgadas"
 *               quantity:
 *                 type: integer
 *                 example: 5
 *               weight:
 *                 type: number
 *                 format: float
 *                 example: 3.2
 *               width:
 *                 type: number
 *                 format: float
 *                 example: 54.6
 *               height:
 *                 type: number
 *                 format: float
 *                 example: 32.1
 *               location:
 *                 type: string
 *                 example: "Oficina 3"
 *               condition:
 *                 type: string
 *                 example: "Nuevo"
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2023-08-10"
 *     responses:
 *       201:
 *         description: Recurso creado exitosamente en el inventario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El recurso fue agregado al inventario correctamente."
 *       400:
 *         description: Datos faltantes o incorrectos en la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Método incorrecto."
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

apiCatInventario.post(
  "/agregar-inventario",
  verificarToken,
  CatInventarioControllers.InsertarInventario,
);

/**
 * @swagger
 * /actualizar-inventario:
 *   put:
 *     summary: Actualiza un registro de inventario existente
 *     description: Modifica la información de un activo en el inventario especificado por su ID en el cuerpo de la solicitud.
 *     tags:
 *       - CatInventario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemCode:
 *                 type: string
 *                 example: "A1001"
 *               name:
 *                 type: string
 *                 example: "Laptop Dell"
 *               description:
 *                 type: string
 *                 example: "Laptop para oficina"
 *               quantity:
 *                 type: integer
 *                 example: 10
 *               weight:
 *                 type: number
 *                 format: float
 *                 example: 2.5
 *               width:
 *                 type: number
 *                 format: float
 *                 example: 35.6
 *               height:
 *                 type: number
 *                 format: float
 *                 example: 23.4
 *               location:
 *                 type: string
 *                 example: "Almacén A"
 *               condition:
 *                 type: string
 *                 example: "Nuevo"
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2023-05-15"
 *               status:
 *                 type: string
 *                 example: "Activo"
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Recurso actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El recurso fue actualizado correctamente."
 *       404:
 *         description: Recurso no encontrado para actualizar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró el recurso para actualizar."
 *       400:
 *         description: Solicitud incorrecta, datos incompletos o incorrectos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Método incorrecto."
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

apiCatInventario.put(
  "/actualizar-inventario",
  verificarToken,
  CatInventarioControllers.EditarInventario,
);

/**
 * @swagger
 * /borrar-inventario-boveda/{id}:
 *   put:
 *     summary: Mueve un activo a la bóveda de eliminados
 *     description: Cambia el estado de un activo en `catinventory` a "Inactivo" utilizando su `ID`.
 *     tags:
 *       - CatInventario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del activo que se desea mover a la bóveda.
 *     responses:
 *       200:
 *         description: Recurso movido a la bóveda correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El recurso fue mandado a la boveda correctamente."
 *       404:
 *         description: Activo no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Recurso no encontrado."
 *       400:
 *         description: Solicitud incorrecta, falta el ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Método incorrecto."
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

apiCatInventario.put(
  "/borrar-inventario-boveda/:id",
  verificarToken,
  CatInventarioControllers.MoverABovedaEliminados,
);

/**
 * @swagger
 * /eliminar-inventario/{id}:
 *   delete:
 *     summary: Elimina un elemento del inventario
 *     description: Elimina un elemento específico del inventario mediante su ID.
 *     tags:
 *       - CatInventario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del elemento de inventario a eliminar
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
 *                   example: "El recurso fue eliminado correctamente."
 *       404:
 *         description: No se encontró el recurso para eliminar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró el recurso para eliminar."
 *       400:
 *         description: ID no válido o faltante en la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "ID inválido o no proporcionado."
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

apiCatInventario.delete(
  "/eliminar-inventario/:id",
  verificarToken,
  CatInventarioControllers.EliminarInventario,
);

export { apiCatInventario };
