import express from 'express';
import { verificarToken } from '../middleware/verificarToken.js';
import PadresControllers from '../controllers/padresControllers.js';

const apiPadres = express.Router();
apiPadres.use(express.json());

/**
 * @swagger
 * /lista-de-padres:
 *   get:
 *     summary: Obtiene todos los padres activos
 *     description: Retorna una lista de todos los padres que están activos en el sistema.
 *     tags:
 *       - Padres
 *     responses:
 *       200:
 *         description: Lista de padres activos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del padre.
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     description: Nombre del padre.
 *                     example: Juan Pérez
 *                   telefono:
 *                     type: string
 *                     description: Teléfono de contacto.
 *                     example: 555-1234
 *       404:
 *         description: No se encontraron padres activos
 *       500:
 *         description: Error interno del servidor
 */
apiPadres.get('/lista-de-padres', PadresControllers.ObtenerTodosLosPapas);

/**
 * @swagger
 * /lista-de-padres-eliminados:
 *   get:
 *     summary: Obtiene todos los padres eliminados
 *     description: Retorna una lista de todos los padres que han sido eliminados (inactivos) del sistema.
 *     tags:
 *       - Padres
 *     responses:
 *       200:
 *         description: Lista de padres eliminados (inactivos)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del padre.
 *                     example: 3
 *                   nombre:
 *                     type: string
 *                     description: Nombre del padre.
 *                     example: María Gómez
 *                   telefono:
 *                     type: string
 *                     description: Teléfono de contacto.
 *                     example: 555-5678
 *                   status:
 *                     type: string
 *                     description: Estado del padre (Activo/Inactivo).
 *                     example: Inactivo
 *       404:
 *         description: No se encontraron padres eliminados
 *       500:
 *         description: Error interno del servidor
 */
apiPadres.get(
  '/lista-de-padres-eliminados',
  PadresControllers.ObtenerPadresEliminados
);

/**
 * @swagger
 * /lista-padres-maestro/{id}:
 *   post:
 *     summary: Obtiene los padres relacionados con un maestro
 *     description: Retorna una lista de padres que están relacionados con un maestro específico según el ID del maestro.
 *     tags:
 *       - Padres
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del maestro
 *         example: 10
 *     responses:
 *       200:
 *         description: Lista de padres relacionados con el maestro
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del padre.
 *                     example: 2
 *                   nombre:
 *                     type: string
 *                     description: Nombre del padre.
 *                     example: Pedro Fernández
 *                   telefono:
 *                     type: string
 *                     description: Teléfono de contacto.
 *                     example: 555-1234
 *                   maestroId:
 *                     type: integer
 *                     description: ID del maestro con el que está relacionado el padre.
 *                     example: 10
 *       404:
 *         description: No se encontró ningún maestro con ese ID o no hay padres relacionados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontraron padres que se relacionen con el maestro o estan en la boveda"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */

apiPadres.post(
  '/lista-padres-maestro/:id',
  PadresControllers.ObtenerPadresPorMaestro
);

/**
 * @swagger
 * /busqueda-padres:
 *   post:
 *     summary: Realiza una búsqueda de padres por correo, nombre o apellido
 *     description: Busca en la base de datos de padres utilizando filtros opcionales como correo electrónico, nombre o apellido.
 *     tags:
 *       - Padres
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del padre a buscar.
 *                 example: ejemplo@correo.com
 *               firstName:
 *                 type: string
 *                 description: Nombre del padre a buscar.
 *                 example: Juan
 *               lastName:
 *                 type: string
 *                 description: Apellido del padre a buscar.
 *                 example: Pérez
 *     responses:
 *       200:
 *         description: Resultados de la búsqueda de padres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del padre.
 *                     example: 5
 *                   nombre:
 *                     type: string
 *                     description: Nombre del padre.
 *                     example: Juan Pérez
 *                   email:
 *                     type: string
 *                     description: Correo electrónico del padre.
 *                     example: juan.perez@correo.com
 *       404:
 *         description: No se encontraron padres que coincidan con los criterios de búsqueda
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Papá o Mamá no encontrados, intente buscar con otro"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */

apiPadres.post('/busqueda-padres', PadresControllers.BusquedaDePadres);

/**
 * @swagger
 * /insertar-padres:
 *   post:
 *     summary: Inserta un nuevo registro de padre o madre
 *     description: Permite insertar un nuevo padre o madre con datos como nombre, ocupación, contacto de emergencia, entre otros.
 *     tags:
 *       - Padres
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teacherID
 *               - firstName
 *               - lastName
 *               - dateOfBirth
 *               - ocupation
 *               - gender
 *               - curp
 *               - email
 *               - phone
 *               - age
 *               - address
 *               - emergencyContact
 *               - emergencyPhone
 *             properties:
 *               teacherID:
 *                 type: string
 *                 description: ID del maestro asociado.
 *                 example: "12345"
 *               firstName:
 *                 type: string
 *                 description: Nombre del padre o madre.
 *                 example: "Juan"
 *               lastName:
 *                 type: string
 *                 description: Apellido del padre o madre.
 *                 example: "Pérez"
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento del padre o madre.
 *                 example: "1980-05-15"
 *               ocupation:
 *                 type: string
 *                 description: Ocupación del padre o madre.
 *                 example: "Ingeniero"
 *               gender:
 *                 type: string
 *                 description: Género del padre o madre.
 *                 example: "Masculino"
 *               curp:
 *                 type: string
 *                 description: CURP del padre o madre.
 *                 example: "ABCD800515HMNXYZ01"
 *               email:
 *                 type: string
 *                 description: Correo electrónico del padre o madre.
 *                 example: "juan.perez@correo.com"
 *               phone:
 *                 type: string
 *                 description: Teléfono de contacto del padre o madre.
 *                 example: "5551234567"
 *               age:
 *                 type: integer
 *                 description: Edad del padre o madre.
 *                 example: 43
 *               address:
 *                 type: string
 *                 description: Dirección del padre o madre.
 *                 example: "Calle Falsa 123"
 *               emergencyContact:
 *                 type: string
 *                 description: Nombre del contacto de emergencia.
 *                 example: "María López"
 *               emergencyPhone:
 *                 type: string
 *                 description: Teléfono del contacto de emergencia.
 *                 example: "5559876543"
 *     responses:
 *       201:
 *         description: El registro del padre o madre fue creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se creo con exito"
 *       400:
 *         description: Campos faltantes o errores en los datos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Los campos son requeridos"
 *       409:
 *         description: Conflicto, el correo ya está registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El correo ya se encuentra registrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al crear al papá o mamá"
 *                 error:
 *                   type: string
 */

apiPadres.post('/insertar-padres', PadresControllers.InsertarPadres);

/**
 * @swagger
 * /actualizar-padres:
 *   put:
 *     summary: Actualiza la información de un padre o madre
 *     description: Permite actualizar la información de un padre o madre ya registrado, incluyendo datos personales, contacto de emergencia, y estado.
 *     tags:
 *       - Padres
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - teacherID
 *               - firstName
 *               - lastName
 *               - dateOfBirth
 *               - ocupation
 *               - gender
 *               - curp
 *               - email
 *               - phone
 *               - age
 *               - address
 *               - emergencyContact
 *               - emergencyPhone
 *               - status
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID único del padre o madre.
 *                 example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *               teacherID:
 *                 type: string
 *                 description: ID del maestro asociado.
 *                 example: "12345"
 *               firstName:
 *                 type: string
 *                 description: Nombre del padre o madre.
 *                 example: "Juan"
 *               lastName:
 *                 type: string
 *                 description: Apellido del padre o madre.
 *                 example: "Pérez"
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento del padre o madre.
 *                 example: "1980-05-15"
 *               ocupation:
 *                 type: string
 *                 description: Ocupación del padre o madre.
 *                 example: "Ingeniero"
 *               gender:
 *                 type: string
 *                 description: Género del padre o madre.
 *                 example: "Masculino"
 *               curp:
 *                 type: string
 *                 description: CURP del padre o madre.
 *                 example: "ABCD800515HMNXYZ01"
 *               email:
 *                 type: string
 *                 description: Correo electrónico del padre o madre.
 *                 example: "juan.perez@correo.com"
 *               phone:
 *                 type: string
 *                 description: Teléfono de contacto del padre o madre.
 *                 example: "5551234567"
 *               age:
 *                 type: integer
 *                 description: Edad del padre o madre.
 *                 example: 43
 *               address:
 *                 type: string
 *                 description: Dirección del padre o madre.
 *                 example: "Calle Falsa 123"
 *               emergencyContact:
 *                 type: string
 *                 description: Nombre del contacto de emergencia.
 *                 example: "María López"
 *               emergencyPhone:
 *                 type: string
 *                 description: Teléfono del contacto de emergencia.
 *                 example: "5559876543"
 *               status:
 *                 type: string
 *                 description: Estado actual del padre o madre (Activo o Inactivo).
 *                 example: "Activo"
 *     responses:
 *       200:
 *         description: El registro del padre o madre fue actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se actualizo el papá o la mamá"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hubo un error en la actualizacion del registro"
 *                 error:
 *                   type: string
 */

apiPadres.put('/actualizar-padres', PadresControllers.EditarPadres);

/**
 * @swagger
 * /borrar-padres-boveda/{id}:
 *   put:
 *     summary: Mueve un padre o madre a la bóveda de eliminados
 *     description: Cambia el estado de un padre o madre a "Inactivo", moviéndolo a la bóveda de eliminados.
 *     tags:
 *       - Padres
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del padre o madre que se desea mover a la bóveda.
 *         schema:
 *           type: string
 *           example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *     responses:
 *       200:
 *         description: El padre o madre fue movido a la bóveda de eliminados con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se mando a la boveda de eliminados o esta en la boveda"
 *       400:
 *         description: No se envió un ID válido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se envio el ID o no es valido"
 *       500:
 *         description: Error interno del servidor al mover a la bóveda.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hubo un error al mandar a la boveda de eliminados"
 *                 error:
 *                   type: string
 */

apiPadres.put(
  '/borrar-padres-boveda/:id',
  PadresControllers.MoverABovedaEliminados
);

/**
 * @swagger
 * /borrar-padres-def/{id}:
 *   delete:
 *     summary: Elimina un padre o madre de forma definitiva
 *     description: Elimina un padre o madre de la base de datos usando su ID. Esta acción es irreversible.
 *     tags:
 *       - Padres
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del padre o madre que se desea eliminar.
 *         schema:
 *           type: string
 *           example: "a1b2c3d4-e5f6-7890-1234-56789abcdef0"
 *     responses:
 *       200:
 *         description: El padre o madre fue eliminado de forma definitiva con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Se eliminó definitivamente el papá o mamá"
 *       400:
 *         description: No se envió un ID válido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se envió el ID o no es válido"
 *       404:
 *         description: El padre o madre no existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El papá o mamá no existe"
 *       500:
 *         description: Error interno del servidor al eliminar al padre o madre.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hubo un error al eliminar al papá o mamá"
 *                 error:
 *                   type: string
 */

apiPadres.delete('/borrar-padres-def/:id', PadresControllers.EliminarPadre);

export { apiPadres };
