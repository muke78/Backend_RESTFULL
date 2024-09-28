const express = require('express');
const MaestrosControllers = require('../controllers/maestrosControllers');
const api = express.Router();

api.use(express.json());

api.get('/lista-de-maestros', MaestrosControllers.ObtenerTodosLosMaestros);
api.post('/buscar-maestro', MaestrosControllers.BusquedaDeMaestro);
api.post('/agregar-maestro', MaestrosControllers.InsertarMaestro);
api.put('/actualizar-maestro', MaestrosControllers.ActualizarMaestro);
api.delete('/borrar-maestro/:id', MaestrosControllers.EliminarMaestro);

module.exports = api;
