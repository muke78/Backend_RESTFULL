const express = require('express');
const UsuariosControllers = require('../controllers/usuariosControllers');
const api = express.Router();
api.use(express.json());

/**
 * @swagger
 * /lista-de-usuarios:
 *   get:
 *     summary: Obtiene la lista de usuarios
 *     description: Este endpoint devuelve la lista completa de usuarios ordenada alfabéticamente por el nombre de usuario.
 *     tags:
 *       - Usuarios
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
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   NameUser:
 *                     type: string
 *                     example: "Juan Perez"
 *                   email:
 *                     type: string
 *                     example: "juan.perez@example.com"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2023-09-28T14:48:00.000Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2023-09-28T14:48:00.000Z"
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

api.get('/lista-de-usuarios', UsuariosControllers.ObtenerTodosLosUsuarios);

/**
 * @swagger
 * /crear-usuario:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Este endpoint permite la creación de un nuevo usuario proporcionando el nombre de usuario, correo electrónico y contraseña.
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameUser:
 *                 type: string
 *                 example: "Juan Perez"
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
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
 *         description: Campos requeridos faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Los campos son requeridos"
 *       500:
 *         description: Error al crear el usuario o el correo ya está registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "El correo ya se encuentra registrado"
 */

api.post('/crear-usuario', UsuariosControllers.InsertarUsario);

/**
 * @swagger
 * /actualizar-usuario:
 *   put:
 *     summary: Actualiza un usuario existente
 *     description: Este endpoint actualiza la información de un usuario existente, incluyendo el nombre de usuario, correo electrónico y contraseña.
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *               nameUser:
 *                 type: string
 *                 example: "Juan Perez"
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 example: "newpassword123"
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
 *         description: Error en la actualización del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hubo un error en la actualizacion del usuario"
 *                 error:
 *                   type: string
 *                   example: "Detalles del error"
 */


api.put('/actualizar-usuario', UsuariosControllers.EditarUsuario);

/**
 * @swagger
 * /eliminar-usuario/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     description: Este endpoint elimina un usuario existente basado en el ID proporcionado.
 *     tags:
 *       - Usuarios
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


api.delete('/eliminar-usuario/:id', UsuariosControllers.EliminarUsuario);

module.exports = api;
