import express from 'express';
import { verificarToken } from '../middleware/verificarToken.js';
import UsuariosControllers from '../controllers/usuariosControllers.js';

const apiUsuarios = express.Router();
apiUsuarios.use(express.json());

apiUsuarios.post('/login', UsuariosControllers.Login);

/**
 * @swagger
 * /lista-de-usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Devuelve una lista de todos los usuarios ordenados por nombre de usuario en orden ascendente.
 *     tags:
 *       - Users
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ID:
 *                     type: string
 *                     description: ID del usuario.
 *                     example: "c4f2525c-8062-11ef-949a-00e04c360195"
 *                   NameUser:
 *                     type: string
 *                     description: Nombre del usuario.
 *                     example: "Juan Pérez"
 *                   Email:
 *                     type: string
 *                     description: Correo electrónico del usuario.
 *                     example: "juan.perez@example.com"
 *                   Role:
 *                     type: string
 *                     description: Rol del usuario.
 *                     example: "user"
 *                   AccountStatus:
 *                     type: string
 *                     description: Estado de la cuenta.
 *                     example: "active"
 *                   LastLogin:
 *                     type: string
 *                     description: Última fecha de inicio de sesión.
 *                     example: "2024-10-02 12:34:56"
 *       404:
 *         description: No se encontraron usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontraron usuarios"
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

apiUsuarios.get(
  '/lista-de-usuarios',
  verificarToken,
  UsuariosControllers.ObtenerTodosLosUsuarios
);

/**
 * @swagger
 * /crear-usuario:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Este endpoint permite crear un nuevo usuario en el sistema. Los campos obligatorios son nameUser, email, password, role y accountStatus.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameUser:
 *                 type: string
 *                 description: Nombre del usuario.
 *                 example: "Juan Pérez"
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario.
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *                 example: "securePassword123"
 *               role:
 *                 type: string
 *                 description: Rol del usuario (por ejemplo, 'admin', 'user').
 *                 example: "user"
 *               accountStatus:
 *                 type: string
 *                 description: Estado de la cuenta (por ejemplo, 'active', 'inactive').
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Usuario creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario creado con exito"
 *       400:
 *         description: Falta un campo obligatorio
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Los campos son requeridos"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al crear el usuario"
 *                 error:
 *                   type: object
 */

apiUsuarios.post(
  '/crear-usuario',
  verificarToken,
  UsuariosControllers.InsertarUsario
);

/**
 * @swagger
 * /actualizar-usuario:
 *   put:
 *     summary: Actualiza un usuario existente
 *     description: Este endpoint permite actualizar la información de un usuario existente en el sistema. Los campos obligatorios son nameUser, email, password, role, accountStatus e id.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID del usuario a actualizar.
 *                 example: "c4f2525c-8062-11ef-949a-00e04c360195"
 *               nameUser:
 *                 type: string
 *                 description: Nombre actualizado del usuario.
 *                 example: "Juan Pérez"
 *               email:
 *                 type: string
 *                 description: Correo electrónico actualizado del usuario.
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 description: Contraseña actualizada del usuario.
 *                 example: "newSecurePassword456"
 *               role:
 *                 type: string
 *                 description: Rol actualizado del usuario.
 *                 example: "admin"
 *               accountStatus:
 *                 type: string
 *                 description: Estado actualizado de la cuenta.
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El usuario se actualizo con exito"
 *       500:
 *         description: Error en la actualización del usuario o el correo ya está registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El correo ya se encuentra registrado"
 *                 error:
 *                   type: object
 */

apiUsuarios.put(
  '/actualizar-usuario',
  verificarToken,
  UsuariosControllers.EditarUsuario
);

/**
 * @swagger
 * /eliminar-usuario/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     description: Este endpoint elimina un usuario existente basado en el ID proporcionado.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario eliminado exitosamente"
 *       400:
 *         description: ID no proporcionado o no válido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se envio el ID o no es valido"
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El usuario no existe"
 *       500:
 *         description: Error al eliminar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hubo un error al eliminar el usuario"
 *                 error:
 *                   type: string
 *                   example: "Detalles del error"
 */

apiUsuarios.delete(
  '/eliminar-usuario/:id',
  verificarToken,
  UsuariosControllers.EliminarUsuario
);

export { apiUsuarios };
