import express from "express";

import {
  BusquedaDeUsuarios,
  DeleteUserBulk,
  EditarUsuario,
  EliminarUsuario,
  InsertarUsario,
  InsertarUsuariosRunnerMasive,
  Login,
  ObtenerTodosLosUsuarios,
  RegistrarUsuario,
} from "../controllers/users/index.js";
import {
  bulkDeleteUserRateLimiter,
  createUserRateLimiter,
  deleteUserRateLimiter,
  listUsersRateLimiter,
  loginRateLimiter,
  registerUserRateLimiter,
  searchUsersRateLimiter,
  updateUserRateLimiter,
} from "../helpers/usersHelpers/rateLimitRequestUsers.js";
import { verificarToken } from "../middleware/verificarToken.js";

const apiUsuarios = express.Router();

/**
 * @swagger
 * /lista-de-usuarios/{status}:
 *   get:
 *     summary: Obtener todos los usuarios según filtros opcionales
 *     description: Retorna una lista de usuarios filtrados por estado, tipo de cuenta y rol. Si algún filtro tiene el valor "All", no se aplica.
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *           example: Activo
 *         description: Estado de la cuenta del usuario (ej. "Activo", "Inactivo", "All")
 *       - in: query
 *         name: correo
 *         required: false
 *         schema:
 *           type: string
 *           example: normal
 *         description: Tipo de cuenta del usuario (ej. "normal", "admin", "All")
 *       - in: query
 *         name: rol
 *         required: false
 *         schema:
 *           type: string
 *           example: user
 *         description: Rol del usuario (ej. "maestro", "admin", "All")
 *     responses:
 *       200:
 *         description: Lista de usuarios encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: string
 *                   NameUser:
 *                     type: string
 *                   Email:
 *                     type: string
 *                   Role:
 *                     type: string
 *                   AccountType:
 *                     type: string
 *                   AccountStatus:
 *                     type: string
 *                   LastLogin:
 *                     type: string
 *                     format: date-time
 *       404:
 *         description: No se encontraron usuarios con los filtros proporcionados
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.get(
  "/lista-de-usuarios/:status",
  verificarToken,
  listUsersRateLimiter,
  ObtenerTodosLosUsuarios,
);

/**
 * @swagger
 * /busqueda-usuario/{email}:
 *   get:
 *     summary: Buscar un usuario por su correo electrónico
 *     description: Retorna la información de un usuario que coincida parcialmente con el correo proporcionado.
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           example: ejemplo@correo.com
 *         description: Correo (o parte de él) del usuario a buscar
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: string
 *                   NameUser:
 *                     type: string
 *                   Email:
 *                     type: string
 *                   Role:
 *                     type: string
 *                   AccountType:
 *                     type: string
 *                   AccountStatus:
 *                     type: string
 *                   LastLogin:
 *                     type: string
 *                     format: date-time
 *       400:
 *         description: Petición incorrecta (falta el parámetro de email)
 *       404:
 *         description: No se encontró ningún usuario con el correo proporcionado
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.get(
  "/busqueda-usuario/:email",
  searchUsersRateLimiter,
  verificarToken,
  BusquedaDeUsuarios,
);

/**
 * @swagger
 * /crear-usuario:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Registra un nuevo usuario con los datos proporcionados. El correo debe ser único.
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nameUser
 *               - email
 *               - password
 *               - accountStatus
 *               - role
 *             properties:
 *               nameUser:
 *                 type: string
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 example: juan@example.com
 *               password:
 *                 type: string
 *                 example: MiContraseñaSegura123!
 *               accountStatus:
 *                 type: string
 *                 example: Activo
 *               role:
 *                 type: string
 *                 example: maestro
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 NameUser:
 *                   type: string
 *                 Email:
 *                   type: string
 *                 Role:
 *                   type: string
 *                 AccountStatus:
 *                   type: string
 *       400:
 *         description: Faltan campos requeridos en la solicitud
 *       409:
 *         description: El correo ya está registrado
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.post(
  "/crear-usuario",
  createUserRateLimiter,
  verificarToken,
  InsertarUsario,
);

apiUsuarios.post(
  "/crear-usuario-masiva",
  verificarToken,
  InsertarUsuariosRunnerMasive,
);

/**
 * @swagger
 * /registrar-usuario:
 *   post:
 *     summary: Registro de nuevo usuario sin autenticación previa
 *     description: Registra un nuevo usuario con rol definido. El usuario se crea con estado "Inactivo" y tipo de cuenta "normal".
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nameUser
 *               - email
 *               - password
 *               - role
 *             properties:
 *               nameUser:
 *                 type: string
 *                 example: Ana Torres
 *               email:
 *                 type: string
 *                 example: ana@correo.com
 *               password:
 *                 type: string
 *                 example: MiClaveSegura456!
 *               role:
 *                 type: string
 *                 example: maestro
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 NameUser:
 *                   type: string
 *                 Email:
 *                   type: string
 *                 Role:
 *                   type: string
 *                 AccountStatus:
 *                   type: string
 *                   example: Inactivo
 *       400:
 *         description: Faltan campos requeridos en la solicitud
 *       409:
 *         description: El correo ya está registrado
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.post(
  "/registrar-usuario",
  registerUserRateLimiter,
  RegistrarUsuario,
);

/**
 * @swagger
 * /actualizar-usuario:
 *   put:
 *     summary: Actualizar datos de un usuario
 *     description: Actualiza los datos de un usuario existente. Si se proporciona una nueva contraseña, será hasheada y actualizada. Se requiere token de autenticación.
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nameUser
 *               - email
 *               - role
 *               - accountStatus
 *             properties:
 *               id:
 *                 type: string
 *                 format: uuid
 *                 example: 5f9c2f4e-1b2a-4c3d-a5b6-7c8d9e0f1a2b
 *               nameUser:
 *                 type: string
 *                 example: Carlos Ramírez
 *               email:
 *                 type: string
 *                 example: carlos@correo.com
 *               password:
 *                 type: string
 *                 example: NuevaClave789!
 *                 description: Opcional. Si no se envía, la contraseña no se actualiza.
 *               role:
 *                 type: string
 *                 example: admin
 *               accountStatus:
 *                 type: string
 *                 example: Activo
 *     responses:
 *       200:
 *         description: El recurso fue actualizado correctamente
 *       404:
 *         description: No se encontró el recurso para actualizar
 *       409:
 *         description: El correo ya existe y no se puede actualizar
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.put(
  "/actualizar-usuario",
  updateUserRateLimiter,
  verificarToken,
  EditarUsuario,
);

/**
 * @swagger
 * /eliminar-usuario/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Elimina un usuario de la base de datos. Se requiere el ID del usuario como parámetro en la URL. El usuario será eliminado junto con sus registros asociados si existen.
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *           example: 5f9c2f4e-1b2a-4c3d-a5b6-7c8d9e0f1a2b
 *         description: ID del usuario que se desea eliminar.
 *     responses:
 *       200:
 *         description: El recurso fue eliminado correctamente
 *       404:
 *         description: No se encontró el usuario con el ID proporcionado
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.delete(
  "/eliminar-usuario/:id",
  deleteUserRateLimiter,
  verificarToken,
  EliminarUsuario,
);

/**
 * @swagger
 * /bulk-delete-users:
 *   delete:
 *     summary: Eliminar múltiples usuarios en una sola solicitud
 *     description: Permite eliminar hasta 600 usuarios en una sola solicitud. Los IDs de los usuarios deben enviarse en un array en el cuerpo de la solicitud. La eliminación se realiza en lotes de 100 usuarios por vez.
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: uuid
 *                   example: 5f9c2f4e-1b2a-4c3d-a5b6-7c8d9e0f1a2b
 *                 description: Lista de IDs de usuarios a eliminar
 *             required:
 *               - ids
 *     responses:
 *       200:
 *         description: Se eliminaron los usuarios correctamente
 *       400:
 *         description: Los datos proporcionados son incorrectos o no se proporcionaron IDs
 *       404:
 *         description: Algunos usuarios no fueron encontrados para ser eliminados
 *       413:
 *         description: El número de IDs enviados supera el límite permitido de 600
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.delete(
  "/bulk-delete-users",
  bulkDeleteUserRateLimiter,
  verificarToken,
  DeleteUserBulk,
);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     description: Permite a los usuarios iniciar sesión proporcionando su correo electrónico y contraseña. Si las credenciales son correctas, se genera un token de autenticación. Si el usuario está inactivo, se devuelve un error de prohibición.
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "usuario@example.com"
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "password123"
 *                 description: Contraseña del usuario
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Token generado con éxito, sesión iniciada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: El token de autenticación JWT
 *       400:
 *         description: El correo electrónico o la contraseña no son correctos
 *       404:
 *         description: No se encontró un usuario con ese correo electrónico
 *       403:
 *         description: El usuario está inactivo
 *       500:
 *         description: Error interno del servidor
 */

apiUsuarios.post("/login", loginRateLimiter, Login);

export { apiUsuarios };
