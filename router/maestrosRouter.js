const express = require('express');
const MaestrosControllers = require('../controllers/maestrosControllers');
const verificarToken = require('../middleware/verificarToken');
const api = express.Router();

api.use(express.json());

api.get(
  '/lista-de-maestros',

  MaestrosControllers.ObtenerTodosLosMaestros
);

api.get(
  '/lista-de-maestros-eliminados',

  MaestrosControllers.ObtenerLosUsuariosEliminados
);

api.post(
  '/buscar-maestro',

  MaestrosControllers.BusquedaDeMaestro
);

api.post(
  '/agregar-maestro',

  MaestrosControllers.InsertarMaestro
);

api.put(
  '/actualizar-maestro',

  MaestrosControllers.ActualizarMaestro
);

api.delete(
  '/borrar-maestro-boveda/:id',

  MaestrosControllers.MoverABovedaEliminados
);

api.delete(
  '/borrar-maestro-def/:id',

  MaestrosControllers.EliminarMaestro
);

module.exports = api;
