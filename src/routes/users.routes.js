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
} from "../helpers/rateLimit/users.rateLimit.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiUsuarios = express.Router();

/**
 * @swagger
 * /users?:
 *   get:
 *     summary: Obtener todos los usuarios según filtros opcionales
 *     description: Retorna una lista de usuarios filtrados por estado, tipo de cuenta y rol. Si algún filtro tiene el valor "All", no se aplica.
 *     tags:
 *       - Usuarios
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         required: false
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
 *         description: Tipo de cuenta del usuario (ej. "normal", "google")
 *       - in: query
 *         name: rol
 *         required: false
 *         schema:
 *           type: string
 *           example: admin
 *         description: Rol del usuario (ej. "user", "admin")
 *     responses:
 *       200:
 *         description: Lista de usuarios encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ID:
 *                         type: string
 *                         format: uuid
 *                       NameUser:
 *                         type: string
 *                       Email:
 *                         type: string
 *                       Password:
 *                         type: string
 *                       ProfilePicture:
 *                         type: string
 *                         format: uri
 *                       Role:
 *                         type: string
 *                       AccountType:
 *                         type: string
 *                       LastLogin:
 *                         type:
 *                         format: date-time
 *                       AccountStatus:
 *                         type: string
 *                       Created:
 *                         type: string
 *                         format: date-time
 *                       Updated:
 *                         type: string
 *                         format: date-time
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: number
 *       404:
 *         description: No se encontraron usuarios con los filtros proporcionados
 *       500:
 *         description: Error interno del servidor
 */

// GET /api/usuarios/lista de usuarios
apiUsuarios.get(
  "/",
  verificarToken,
  listUsersRateLimiter,
  async (request, response, next) => {
    try {
      const listUsers = request.query;

      const result = await ObtenerTodosLosUsuarios(listUsers);
      methodOK(request, response, result);
    } catch (error) {
      next(error);
    }
  },
);

/**
 * @swagger
 * /users/search?:
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
 *         description: Lista de usuarios encontrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ID:
 *                         type: string
 *                         format: uuid
 *                       NameUser:
 *                         type: string
 *                       Email:
 *                         type: string
 *                       Password:
 *                         type: string
 *                       ProfilePicture:
 *                         type: string
 *                         format: uri
 *                       Role:
 *                         type: string
 *                       AccountType:
 *                         type: string
 *                       LastLogin:
 *                         type:
 *                         format: date-time
 *                       AccountStatus:
 *                         type: string
 *                       Created:
 *                         type: string
 *                         format: date-time
 *                       Updated:
 *                         type: string
 *                         format: date-time
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: number
 *       400:
 *         description: El campo de correo es obligatorio para realizar busquedas
 *       404:
 *         description: No se encontraron usuarios con el correo proporcionado
 *       500:
 *         description: Error interno del servidor
 */

// GET /api/usuarios/buscar
apiUsuarios.get(
  "/search",
  verificarToken,
  searchUsersRateLimiter,
  async (request, response, next) => {
    try {
      const { email } = request.query;
      const result = await BusquedaDeUsuarios(email);
      methodOK(request, response, result);
    } catch (error) {
      next(error);
    }
  },
);

/**
 * @swagger
 * /users:
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               accountStatus:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Recurso creado exitosamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       NameUser:
 *                         type: string
 *                       Email:
 *                         type: string
 *                       Role:
 *                         type: string
 *                       AccountStatus:
 *                         type: string
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: number
 *       400:
 *         description: Debe de proporcionar todos los campos
 *       409:
 *         description: El correo ya se encuentra registrado
 *       500:
 *         description: Error interno del servidor
 */

//POST /api/usuarios/crear
apiUsuarios.post(
  "/",
  verificarToken,
  createUserRateLimiter,
  async (request, response, next) => {
    try {
      const user = request.body;
      const result = await InsertarUsario(user);
      methodCreated(request, response, result);
    } catch (error) {
      next(error);
    }
  },
);

//POST /api/usuarios/masivo
apiUsuarios.post("/bulk", verificarToken, async (request, response, next) => {
  try {
    const { countInsert } = request.body;
    const result = await InsertarUsuariosRunnerMasive(countInsert);
    methodCreated(
      request,
      response,
      `Se insertaron correctamente ${result.length} usuarios como prueba`,
    );
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * users/auth/register:
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
 *               - accountStatus
 *               - role
 *             properties:
 *               nameUser:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               accountStatus:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Recurso creado exitosamente
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       NameUser:
 *                         type: string
 *                       Email:
 *                         type: string
 *                       Role:
 *                         type: string
 *                       AccountStatus:
 *                         type: string
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: number
 *       400:
 *         description: Debe de proporcionar todos los campos
 *       409:
 *         description: El correo ya se encuentra registrado
 *       500:
 *         description: Error interno del servidor
 */

//POST /api/usuarios/registro
apiUsuarios.post(
  "/auth/register",
  registerUserRateLimiter,
  async (request, response, next) => {
    try {
      const register = request.body;
      const result = await RegistrarUsuario(register);
      methodCreated(request, response, result);
    } catch (error) {
      next(error);
    }
  },
);

/**
 * @swagger
 * /auth/login:
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
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: usuario@example.com
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 format: password
 *                 example: password123
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Token generado con éxito, sesión iniciada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: string
 *                   description: El token de autenticación JWT
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: string
 *                       example: "1"
 *       400:
 *         description: El correo electrónico o la contraseña no son correctos
 *       409:
 *         description: El correo ya está registrado con Google
 *       404:
 *         description: El usuario no ha podido ser encontrado
 *       403:
 *         description: El usuario está inactivo, pida la reactivación a un administrador
 *       500:
 *         description: Error interno del servidor
 */

//POST /api/usuarios/auth/login
apiUsuarios.post(
  "/auth/login",
  loginRateLimiter,
  async (request, response, next) => {
    try {
      const userData = request.body;
      const token = await Login(userData);
      methodOK(request, response, token);
    } catch (error) {
      next(error);
    }
  },
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar datos de un usuario
 *     description: Actualiza los datos de un usuario existente. Si se proporciona una nueva contraseña, será hasheada y actualizada. Se requiere token de autenticación.
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
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nameUser
 *               - email
 *               - role
 *               - accountStatus
 *             properties:
 *               nameUser:
 *                 type: string
 *                 example: Nmbre de usuario
 *               email:
 *                 type: string
 *                 format: email
 *                 example: alguienexample@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *                 description: Opcional. Si no se envía, la contraseña no se actualiza.
 *               role:
 *                 type: string
 *                 example: admin
 *               accountStatus:
 *                 type: string
 *                 example: Activo
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 data:
 *                   type: boolean
 *                   example: true
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: number
 *       404:
 *         description: No se proporcionó un ID válido o el usuario no existe
 *       409:
 *         description: El correo ya se encuentra registrado
 *       500:
 *         description: Error interno del servidor
 */

//PUT /api/usuarios/actualizar/:id
apiUsuarios.put(
  "/:id",
  verificarToken,
  updateUserRateLimiter,
  async (request, response, next) => {
    try {
      const userId = request.params.id;
      const userData = request.body;
      const result = await EditarUsuario(userId, userData);
      methodOK(request, response, result);
    } catch (error) {
      next(error);
    }
  },
);

/**
 * @swagger
 * /users/bulk:
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
 *             required:
 *               - ids
 *             properties:
 *               ids:
 *                 type: array
 *                 description: Lista de IDs de usuarios a eliminar
 *                 items:
 *                   type: string
 *                   format: uuid
 *                 example:
 *                   - 1aa52951-2f05-11f0-9a7d-d843ae0db894
 *                   - 1ac07b59-2f05-11f0-9a7d-d843ae0db894
 *                   - 1b30dec6-2f05-11f0-9a7d-d843ae0db894
 *     responses:
 *       200:
 *         description: Usuarios eliminados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: Se eliminaron 3 usuarios correctamente
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: string
 *                       example: "3"
 *       400:
 *         description: Solicitud inválida. Puede deberse a falta de campos o exceso de IDs
 *       413:
 *         description: El número de IDs enviados supera el límite permitido de 600
 *       500:
 *         description: Error interno del servidor
 */

//DELETE /api/usuarios/bulk-delete-users
apiUsuarios.delete(
  "/bulk",
  verificarToken,
  bulkDeleteUserRateLimiter,
  async (request, response, next) => {
    try {
      const { ids } = request.body;
      await DeleteUserBulk(ids);
      methodOK(request, response, {
        message: `Se eliminaron ${request.body.ids.length} usuarios correctamente`,
      });
    } catch (error) {
      next(error);
    }
  },
);

/**
 * @swagger
 * /users/{id}:
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
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Consulta realizada correctamente
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: El usuario Glenna_Cartwright fue eliminado correctamente
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                     requestId:
 *                       type: string
 *                       format: uuid
 *                     dataCount:
 *                       type: string
 *                       example: "1"
 *       400:
 *         description: Debe de proporcionar todos los campos
 *       404:
 *         description: No se proporcionó un ID válido o el usuario no existe
 *       500:
 *         description: Error interno del servidor
 */

//DELETE /api/usuarios/eliminar/:id
apiUsuarios.delete(
  "/:id",
  verificarToken,
  deleteUserRateLimiter,
  async (request, response, next) => {
    try {
      const userId = request.params.id;
      const result = await EliminarUsuario(userId);
      methodOK(request, response, {
        message: `El usuario ${result.NameUser} fue eliminado correctamente`,
      });
    } catch (error) {
      next(error);
    }
  },
);

export { apiUsuarios };
