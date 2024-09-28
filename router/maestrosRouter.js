const express = require('express');
const MaestrosControllers = require('../controllers/maestrosControllers');
const api = express.Router();

api.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Maestros
 *     description: Endpoints para la gestión de maestros
 */

/**
 * @swagger
 * /lista-de-maestros:
 *   get:
 *     summary: Obtiene una lista de todos los maestros
 *     tags:
 *       - Maestros
 *     responses:
 *       200:
 *         description: Lista de maestros obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 41ad1a22-7d53-11ef-949a-00e04c360195
 *                   firstName:
 *                     type: string
 *                     example: Juan
 *                   lastName:
 *                     type: string
 *                     example: Pérez
 *                   email:
 *                     type: string
 *                     example: juan.perez@example.com
 *       404:
 *         description: No se encontraron maestros
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se encontraron maestros
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al obtener los maestros
 */

api.get('/lista-de-maestros', MaestrosControllers.ObtenerTodosLosMaestros);

/**
 * @swagger
 * tags:
 *  - name: Maestros
 *   description: Endpoints para la gestión de maestros
 */

/**
 * @swagger
 * /buscar-maestro:
 *   post:
 *     summary: Busca un maestro por diferentes criterios
 *     tags:
 *      - Maestros
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 41ad1a22-7d53-11ef-949a-00e04c360195
 *               email:
 *                 type: string
 *                 example: juan.perez@example.com
 *               nameUser:
 *                 type: string
 *                 example: jperez
 *               firstName:
 *                 type: string
 *                 example: Juan
 *     responses:
 *       200:
 *         description: Maestro encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 firstName:
 *                   type: string
 *                   example: Juan
 *                 lastName:
 *                   type: string
 *                   example: Pérez
 *                 email:
 *                   type: string
 *                   example: juan.perez@example.com
 *                 nameUser:
 *                   type: string
 *                   example: jperez
 *       404:
 *         description: Maestro no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Maestro no encontrado
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error al buscar el maestro
 */

api.post('/buscar-maestro', MaestrosControllers.BusquedaDeMaestro);

/**
 * @swagger
 * tags:
 *  - name: Maestros
 *   description: Endpoints para la gestión de maestros
 */

/**
 * @swagger
 * /agregar-maestro:
 *   post:
 *     tags:
 *       - Maestros
 *     summary: Agrega un nuevo maestro a la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameUser:
 *                 type: string
 *                 example: johndoe
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               nameSchool:
 *                 type: string
 *                 example: Escuela Primaria ABC
 *               levelStudies:
 *                 type: string
 *                 example: Licenciatura
 *               studentsInCharge:
 *                 type: integer
 *                 example: 30
 *               cct:
 *                 type: string
 *                 example: 123456
 *               schoolZone:
 *                 type: string
 *                 example: Zona 1
 *               curp:
 *                 type: string
 *                 example: ABCD123456HDFRRL09
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe@example.com
 *               age:
 *                 type: integer
 *                 example: 35
 *               phone:
 *                 type: string
 *                 example: '1234567890'
 *               country:
 *                 type: string
 *                 example: México
 *     responses:
 *       '200':
 *         description: Usuario creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Usuario creado con éxito'
 *       '400':
 *         description: Los campos son requeridos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Los campos son requeridos'
 *       '500':
 *         description: Error al crear el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'El correo ya se encuentra registrado'
 *                 error:
 *                   type: object
 *                   additionalProperties: true
 */

api.post('/agregar-maestro', MaestrosControllers.InsertarMaestro);

/**
 * @swagger
 * tags:
 *  - name: Maestros
 *   description: Endpoints para la gestión de maestros
 */

/**
 * @swagger
 * /actualizar-maestro:
 *   put:
 *     tags:
 *       - Maestros
 *     summary: Actualiza los datos de un maestro existente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del maestro a actualizar
 *                 example: '123e4567-e89b-12d3-a456-426614174000'
 *               nameUser:
 *                 type: string
 *                 example: johndoe
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               nameSchool:
 *                 type: string
 *                 example: Escuela Primaria ABC
 *               levelStudies:
 *                 type: string
 *                 example: Licenciatura
 *               studentsInCharge:
 *                 type: integer
 *                 example: 30
 *               cct:
 *                 type: string
 *                 example: 123456
 *               schoolZone:
 *                 type: string
 *                 example: Zona 1
 *               curp:
 *                 type: string
 *                 example: ABCD123456HDFRRL09
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe@example.com
 *               age:
 *                 type: integer
 *                 example: 35
 *               phone:
 *                 type: string
 *                 example: '1234567890'
 *               country:
 *                 type: string
 *                 example: México
 *               status:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Maestro actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Se actualizó el maestro'
 *       '400':
 *         description: ID del maestro es requerido o hay campos faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'ID del maestro es requerido'
 *       '500':
 *         description: Error al actualizar el registro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Hubo un error en la actualización del registro'
 *                 error:
 *                   type: object
 *                   additionalProperties: true
 */

api.put('/actualizar-maestro', MaestrosControllers.ActualizarMaestro);

/**
 * @swagger
 * tags:
 *  - name: Maestros
 *   description: Endpoints para la gestión de maestros
 */

/**
 * @swagger
 * /borrar-maestro/{id}:
 *   delete:
 *     tags:
 *       - Maestros
 *     summary: Elimina un maestro por su ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del maestro que se desea eliminar
 *         schema:
 *           type: string
 *           example: '123e4567-e89b-12d3-a456-426614174000'
 *     responses:
 *       '200':
 *         description: Maestro eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Se eliminó correctamente el maestro'
 *       '400':
 *         description: ID no válido o no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'No se envió el ID o no es válido'
 *       '404':
 *         description: Maestro no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'El maestro no existe'
 *       '500':
 *         description: Error al eliminar el maestro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Hubo un error al eliminar el maestro'
 *                 error:
 *                   type: object
 *                   additionalProperties: true
 */

api.delete('/borrar-maestro/:id', MaestrosControllers.EliminarMaestro);

module.exports = api;
