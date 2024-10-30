import express from 'express';
import CatInventarioControllers from '../controllers/catInventarioControllers.js';
import { verificarToken } from '../middleware/verificarToken.js';
const apiCatInventario = express.Router();

/**
 * @swagger
 * /lista-inventario:
 *   get:
 *     summary: Obtiene la lista completa del inventario
 *     description: Recupera todos los elementos del inventario. Si no hay elementos, devuelve un mensaje adecuado.
 *     tags:
 *       - Catálogo de Inventario
 *     responses:
 *       200:
 *         description: Lista del inventario recuperada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: string
 *                     example: "1"
 *                   Name:
 *                     type: string
 *                     example: "Producto A"
 *                   Quantity:
 *                     type: integer
 *                     example: 100
 *                   Price:
 *                     type: number
 *                     format: float
 *                     example: 29.99
 *                   Description:
 *                     type: string
 *                     example: "Descripción del producto A"
 *       404:
 *         description: No se encontraron elementos en el inventario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No hya nada en el inventario"
 *       500:
 *         description: Error interno del servidor al recuperar el inventario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al recuperar el inventario"
 */

apiCatInventario.get(
  '/lista-inventario',
  verificarToken,
  CatInventarioControllers.ObtenerTodoElInnventario
);

/**
 * @swagger
 * /lista-inventario-desuso:
 *   get:
 *     summary: Obtiene la lista de inventario en desuso
 *     description: Devuelve todos los elementos del inventario con estado "Inactivo".
 *     tags: [Catálogo de Inventario]
 *     responses:
 *       200:
 *         description: Lista de inventario en desuso obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del artículo
 *                   nombre:
 *                     type: string
 *                     description: Nombre del artículo
 *                   status:
 *                     type: string
 *                     description: Estado del artículo (esperado "Inactivo")
 *       404:
 *         description: No se encontró ningún artículo en el inventario en desuso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No hay nada en el inventario no utilizado
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

apiCatInventario.get(
  '/lista-inventario-desuso',
  CatInventarioControllers.ObtenerInventarioDesuso
);

/**
 * @swagger
 * /agregar-inventario:
 *   post:
 *     summary: Agrega un nuevo elemento al inventario
 *     description: Permite agregar un nuevo elemento al inventario con los detalles necesarios. Todos los campos son obligatorios.
 *     tags:
 *       - Catálogo de Inventario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemCode:
 *                 type: string
 *                 example: "ABC123"
 *               name:
 *                 type: string
 *                 example: "Producto A"
 *               description:
 *                 type: string
 *                 example: "Descripción del producto A"
 *               quantity:
 *                 type: integer
 *                 example: 100
 *               weight:
 *                 type: number
 *                 format: float
 *                 example: 1.5
 *               width:
 *                 type: number
 *                 format: float
 *                 example: 10.5
 *               height:
 *                 type: number
 *                 format: float
 *                 example: 20.0
 *               location:
 *                 type: string
 *                 example: "Almacén 1"
 *               condition:
 *                 type: string
 *                 example: "Nuevo"
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *     responses:
 *       201:
 *         description: Inventario creado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Inventario creado con exito"
 *       400:
 *         description: Los campos requeridos no fueron enviados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Los campos son requeridos"
 *       500:
 *         description: Error interno del servidor al agregar el inventario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al agregar el inventario"
 */

apiCatInventario.post(
  '/agregar-inventario',
  verificarToken,
  CatInventarioControllers.InsertarInventario
);

/**
 * @swagger
 * /actualizar-inventario:
 *   put:
 *     summary: Actualiza un elemento del inventario
 *     description: Permite actualizar un elemento existente en el inventario con los nuevos detalles. Todos los campos son obligatorios, incluido el ID del elemento.
 *     tags:
 *       - Catálogo de Inventario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemCode:
 *                 type: string
 *                 example: "ABC123"
 *               name:
 *                 type: string
 *                 example: "Producto A"
 *               description:
 *                 type: string
 *                 example: "Descripción del producto A"
 *               quantity:
 *                 type: integer
 *                 example: 100
 *               weight:
 *                 type: number
 *                 format: float
 *                 example: 1.5
 *               width:
 *                 type: number
 *                 format: float
 *                 example: 10.5
 *               height:
 *                 type: number
 *                 format: float
 *                 example: 20.0
 *               location:
 *                 type: string
 *                 example: "Almacén 1"
 *               condition:
 *                 type: string
 *                 example: "Nuevo"
 *               purchaseDate:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               id:
 *                 type: string
 *                 example: "1"  # ID del elemento a actualizar
 *     responses:
 *       200:
 *         description: El elemento del inventario fue actualizado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se actualizo el item"
 *       400:
 *         description: El ID del elemento o campos requeridos no fueron enviados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Los campos son requeridos"
 *       500:
 *         description: Error interno del servidor al actualizar el inventario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar el inventario"
 */
apiCatInventario.put(
  '/actualizar-inventario',
  verificarToken,
  CatInventarioControllers.EditarInventario
);

/**
 * @swagger
 * /eliminar-inventario/{id}:
 *   delete:
 *     summary: Elimina un elemento del inventario
 *     description: Permite eliminar un elemento del inventario utilizando su ID. Asegúrese de que el ID proporcionado es válido y corresponde a un elemento existente.
 *     tags:
 *       - Catálogo de Inventario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del elemento a eliminar.
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: El elemento del inventario fue eliminado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se elimino correctamente el item"
 *       400:
 *         description: El ID del elemento no fue enviado o no es válido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se envió el ID o no es válido"
 *       404:
 *         description: No se encontró el elemento en el inventario con el ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El item no existe"
 *       500:
 *         description: Error interno del servidor al eliminar el elemento del inventario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al eliminar el inventario"
 */

apiCatInventario.delete(
  '/eliminar-inventario/:id',
  verificarToken,
  CatInventarioControllers.EliminarInventario
);

export { apiCatInventario };
