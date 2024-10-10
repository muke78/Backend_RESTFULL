const express = require('express');
const MaestrosControllers = require('../controllers/maestrosControllers');
const verificarToken = require('../middleware/verificarToken');
const api = express.Router();

api.use(express.json());

/**
 * @swagger
 * /lista-de-maestros:
 *   get:
 *     summary: Obtiene una lista de todos los maestros activos
 *     tags:
 *       - Maestros
 *     security:
 *       - BearerAuth: []
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
 *                   TeacherID:
 *                     type: integer
 *                     description: ID del maestro
 *                   FirstName:
 *                     type: string
 *                     description: Nombre del maestro
 *                   LastName:
 *                     type: string
 *                     description: Apellido del maestro
 *                   Status:
 *                     type: string
 *                     description: Estado del maestro
 *                     example: Activo
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

api.get('/lista-de-maestros', MaestrosControllers.ObtenerTodosLosMaestros);

/**
 * @swagger
 * /lista-de-maestros-eliminados:
 *   get:
 *     summary: Obtiene una lista de todos los maestros eliminados (inactivos)
 *     tags:
 *       - Maestros
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de maestros eliminados obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   TeacherID:
 *                     type: integer
 *                     description: ID del maestro
 *                   FirstName:
 *                     type: string
 *                     description: Nombre del maestro
 *                   LastName:
 *                     type: string
 *                     description: Apellido del maestro
 *                   Status:
 *                     type: string
 *                     description: Estado del maestro
 *                     example: Inactivo
 *       404:
 *         description: No hay maestros eliminados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No hay maestros eliminados
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

api.get(
  '/lista-de-maestros-eliminados',
  MaestrosControllers.ObtenerLosUsuariosEliminados
);

/**
 * @swagger
 * /buscar-maestro:
 *   post:
 *     summary: Busca un maestro por email, nombre o apellido
 *     tags:
 *       - Maestros
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email del maestro
 *                 example: example@domain.com
 *               firstName:
 *                 type: string
 *                 description: Nombre del maestro
 *                 example: Juan
 *               lastName:
 *                 type: string
 *                 description: Apellido del maestro
 *                 example: Pérez
 *     responses:
 *       200:
 *         description: Maestro encontrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   TeacherID:
 *                     type: integer
 *                     description: ID del maestro
 *                   FirstName:
 *                     type: string
 *                     description: Nombre del maestro
 *                   LastName:
 *                     type: string
 *                     description: Apellido del maestro
 *                   Email:
 *                     type: string
 *                     description: Email del maestro
 *       404:
 *         description: Maestro no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Maestro no encontrado, intente buscar con otro
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

api.post('/buscar-maestro', MaestrosControllers.BusquedaDeMaestro);

/**
 * @swagger
 * /agregar-maestro:
 *   post:
 *     summary: Agrega un nuevo maestro al sistema
 *     tags:
 *       - Maestros
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teacherID:
 *                 type: string
 *                 description: ID del maestro
 *                 example: T001
 *               firstName:
 *                 type: string
 *                 description: Nombre del maestro
 *                 example: Juan
 *               lastName:
 *                 type: string
 *                 description: Apellido del maestro
 *                 example: Pérez
 *               nameSchool:
 *                 type: string
 *                 description: Nombre de la escuela
 *                 example: Escuela Primaria
 *               levelStudies:
 *                 type: string
 *                 description: Nivel de estudios
 *                 example: Licenciatura
 *               studentsInCharge:
 *                 type: integer
 *                 description: Número de estudiantes a cargo
 *                 example: 30
 *               grade:
 *                 type: string
 *                 description: Grado que imparte
 *                 example: 1er Grado
 *               group:
 *                 type: string
 *                 description: Grupo al que pertenece
 *                 example: A
 *               cct:
 *                 type: string
 *                 description: CCT de la escuela
 *                 example: 123456789
 *               schoolZone:
 *                 type: string
 *                 description: Zona escolar
 *                 example: Zona 1
 *               workShift:
 *                 type: string
 *                 description: Turno de trabajo
 *                 example: Matutino
 *               curp:
 *                 type: string
 *                 description: CURP del maestro
 *                 example: PEPM800101HDFRZN00
 *               email:
 *                 type: string
 *                 description: Email del maestro
 *                 example: juan.perez@dominio.com
 *               phone:
 *                 type: string
 *                 description: Teléfono del maestro
 *                 example: 1234567890
 *               age:
 *                 type: integer
 *                 description: Edad del maestro
 *                 example: 35
 *               address:
 *                 type: string
 *                 description: Dirección del maestro
 *                 example: Calle Falsa 123
 *               emergencyContact:
 *                 type: string
 *                 description: Contacto de emergencia
 *                 example: Maria Pérez
 *               emergencyPhone:
 *                 type: string
 *                 description: Teléfono de emergencia
 *                 example: 0987654321
 *     responses:
 *       200:
 *         description: Maestro creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Maestro creado con éxito
 *       400:
 *         description: Algunos campos son requeridos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Los campos son requeridos
 *       500:
 *         description: Error al crear el maestro
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
 *                   example: Error interno del servidor
 */

api.post('/agregar-maestro', MaestrosControllers.InsertarMaestro);

/**
 * @swagger
 * /actualizar-maestro:
 *   put:
 *     summary: Actualiza la información de un maestro existente
 *     tags:
 *       - Maestros
 *     security:
 *       - BearerAuth: []
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
 *                 example: UUID-1234-5678-91011
 *               firstName:
 *                 type: string
 *                 description: Nuevo nombre del maestro
 *                 example: Juan
 *               lastName:
 *                 type: string
 *                 description: Nuevo apellido del maestro
 *                 example: Pérez
 *               nameSchool:
 *                 type: string
 *                 description: Nuevo nombre de la escuela
 *                 example: Escuela Primaria
 *               levelStudies:
 *                 type: string
 *                 description: Nuevo nivel de estudios
 *                 example: Licenciatura
 *               studentsInCharge:
 *                 type: integer
 *                 description: Nuevo número de estudiantes a cargo
 *                 example: 30
 *               grade:
 *                 type: string
 *                 description: Nuevo grado que imparte
 *                 example: 1er Grado
 *               group:
 *                 type: string
 *                 description: Nuevo grupo al que pertenece
 *                 example: A
 *               cct:
 *                 type: string
 *                 description: Nuevo CCT de la escuela
 *                 example: 123456789
 *               schoolZone:
 *                 type: string
 *                 description: Nueva zona escolar
 *                 example: Zona 1
 *               workShift:
 *                 type: string
 *                 description: Nuevo turno de trabajo
 *                 example: Matutino
 *               curp:
 *                 type: string
 *                 description: Nuevo CURP del maestro
 *                 example: PEPM800101HDFRZN00
 *               email:
 *                 type: string
 *                 description: Nuevo email del maestro
 *                 example: juan.perez@dominio.com
 *               phone:
 *                 type: string
 *                 description: Nuevo teléfono del maestro
 *                 example: 1234567890
 *               age:
 *                 type: integer
 *                 description: Nueva edad del maestro
 *                 example: 35
 *               address:
 *                 type: string
 *                 description: Nueva dirección del maestro
 *                 example: Calle Falsa 123
 *               emergencyContact:
 *                 type: string
 *                 description: Nuevo contacto de emergencia
 *                 example: Maria Pérez
 *               emergencyPhone:
 *                 type: string
 *                 description: Nuevo teléfono de emergencia
 *                 example: 0987654321
 *               status:
 *                 type: string
 *                 description: Nuevo estado del maestro (Activo/Inactivo)
 *                 example: Activo
 *     responses:
 *       200:
 *         description: Maestro actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se actualizó el maestro
 *       400:
 *         description: La actualización falló debido a parámetros incorrectos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error en la actualización
 *       500:
 *         description: Error al actualizar el maestro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hubo un error en la actualización del registro
 *                 error:
 *                   type: string
 *                   example: Error interno del servidor
 */
api.put('/actualizar-maestro', MaestrosControllers.ActualizarMaestro);

/**
 * @swagger
 * /borrar-maestro-boveda/{id}:
 *   delete:
 *     summary: Envía un maestro a la bóveda de eliminados
 *     tags:
 *       - Maestros
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del maestro a enviar a la bóveda
 *         schema:
 *           type: string
 *           example: UUID-1234-5678-91011
 *     responses:
 *       200:
 *         description: Maestro enviado a la bóveda con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se mandó a la bóveda de eliminados o está en la bóveda
 *       400:
 *         description: Error en la solicitud debido a ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se envió el ID o no es válido
 *       500:
 *         description: Error al enviar a la bóveda de eliminados
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
 *                   example: Error interno del servidor
 */

api.delete(
  '/borrar-maestro-boveda/:id',
  MaestrosControllers.MoverABovedaEliminados
);

/**
 * @swagger
 * /borrar-maestro-def/{id}:
 *   delete:
 *     summary: Elimina definitivamente un maestro y su usuario asociado
 *     tags:
 *       - Maestros
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del maestro a eliminar
 *         schema:
 *           type: string
 *           example: UUID-1234-5678-91011
 *     responses:
 *       200:
 *         description: Maestro eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se eliminó definitivamente el maestro y su usuario asociado
 *       400:
 *         description: Error en la solicitud debido a ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No se envió el ID o no es válido
 *       404:
 *         description: Maestro no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: El maestro no existe
 *       500:
 *         description: Error al eliminar el maestro y su usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hubo un error al eliminar el maestro y su usuario
 *                 error:
 *                   type: string
 *                   example: Error interno del servidor
 */

api.delete('/borrar-maestro-def/:id', MaestrosControllers.EliminarMaestro);

module.exports = api;
