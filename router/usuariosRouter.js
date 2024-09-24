const express = require('express');
const UsuariosControllers = require('../controllers/usuariosControllers');
const api = express.Router();

api.get('/lista-de-usuarios', UsuariosControllers.ObtenerTodosLosUsuarios);

module.exports = api;
