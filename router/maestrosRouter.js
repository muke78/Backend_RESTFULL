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
 * /lista-de-maestros-eliminados:
 *   get:
 *     summary: Obtiene la lista de maestros eliminados.
 *     description: Retorna una lista de todos los maestros cuyo estado es "eliminado" (Status = 6).
 *     tags:
 *       - Maestros
 *     responses:
 *       200:
 *         description: Lista de maestros eliminados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   TeacherID:
 *                     type: integer
 *                     description: ID único del maestro.
 *                   FirstName:
 *                     type: string
 *                     description: Nombre del maestro.
 *                   LastName:
 *                     type: string
 *                     description: Apellido del maestro.
 *                   Status:
 *                     type: integer
 *                     description: Estado del maestro (eliminado = 6).
 *       404:
 *         description: No hay usuarios eliminados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No hay usuarios eliminados
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error del servidor.
 */

api.get(
  '/lista-de-maestros-eliminados',
  MaestrosControllers.ObtenerLosUsuariosEliminados
);

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
 * /agregar-maestro:
 *   post:
 *     summary: Agrega un nuevo maestro.
 *     description: Crea un nuevo maestro con los detalles proporcionados. Todos los campos son obligatorios.
 *     tags:
 *       - Maestros
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Nombre del maestro.
 *                 example: Juan
 *               lastName:
 *                 type: string
 *                 description: Apellido del maestro.
 *                 example: Pérez
 *               nameSchool:
 *                 type: string
 *                 description: Nombre de la escuela donde trabaja el maestro.
 *                 example: Escuela Primaria No. 15
 *               levelStudies:
 *                 type: string
 *                 description: Nivel de estudios del maestro.
 *                 example: Licenciatura
 *               studentsInCharge:
 *                 type: integer
 *                 description: Número de estudiantes a cargo del maestro.
 *                 example: 30
 *               cct:
 *                 type: string
 *                 description: Clave de centro de trabajo de la escuela.
 *                 example: 10EPR0015T
 *               schoolZone:
 *                 type: string
 *                 description: Zona escolar de la escuela.
 *                 example: Zona 15
 *               curp:
 *                 type: string
 *                 description: CURP del maestro.
 *                 example: GAPL850731HNLLRN07
 *               email:
 *                 type: string
 *                 description: Correo electrónico del maestro.
 *                 example: juan.perez@mail.com
 *               age:
 *                 type: integer
 *                 description: Edad del maestro.
 *                 example: 35
 *               phone:
 *                 type: string
 *                 description: Teléfono del maestro.
 *                 example: 5551234567
 *               country:
 *                 type: string
 *                 description: País del maestro.
 *                 example: México
 *     responses:
 *       200:
 *         description: Maestro creado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Maestro creado con exito
 *       400:
 *         description: Falta información en los campos requeridos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Los campos son requeridos
 *       500:
 *         description: Error al crear el maestro o correo electrónico ya registrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El correo ya se encuentra registrado
 *                 error:
 *                   type: string
 *                   example: Detalles del error
 */

api.post('/agregar-maestro', MaestrosControllers.InsertarMaestro);

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
 * /borrar-maestro-boveda/{id}:
 *   delete:
 *     summary: Mueve a un maestro a la bóveda de eliminados.
 *     description: Cambia el estado del maestro a "eliminado" (Status = 6) en la base de datos.
 *     tags:
 *       - Maestros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID único del maestro.
 *         example: 123e4567-e89b-12d3-a456-426614174000
 *     responses:
 *       200:
 *         description: El maestro fue movido a la bóveda de eliminados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se mandó a la bóveda de eliminados o está en la bóveda
 *       400:
 *         description: No se envió un ID válido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se envió el ID o no es válido
 *       500:
 *         description: Hubo un error al intentar mover al maestro a la bóveda de eliminados.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hubo un error al mandar a la bóveda de eliminados
 *                 error:
 *                   type: string
 *                   example: Detalles del error
 */

api.delete('/borrar-maestro-boveda/:id',MaestrosControllers.MoverABovedaEliminados
);

/**
 * @swagger
 * /borrar-maestro-def/{id}:
 *   delete:
 *     summary: Elimina definitivamente a un maestro.
 *     description: Elimina a un maestro de la base de datos de manera permanente.
 *     tags:
 *       - Maestros
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID único del maestro.
 *         example: 123e4567-e89b-12d3-a456-426614174000
 *     responses:
 *       200:
 *         description: El maestro fue eliminado definitivamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se eliminó definitivamente el maestro
 *       400:
 *         description: No se envió un ID válido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se envió el ID o no es válido
 *       404:
 *         description: El maestro no existe en la base de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El maestro no existe
 *       500:
 *         description: Hubo un error al eliminar al maestro.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hubo un error al eliminar el maestro
 *                 error:
 *                   type: string
 *                   example: Detalles del error
 */


api.delete('/borrar-maestro-def/:id', MaestrosControllers.EliminarMaestro);

module.exports = api;
