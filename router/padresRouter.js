const express = require('express');
const verificarToken = require('../middleware/verificarToken');
const PadresControllers = require('../controllers/padresControllers');
const api = express.Router();
api.use(express.json());

api.get('/lista-de-padres', PadresControllers.ObtenerTodosLosPapas);
api.post(
  '/lista-padres-maestro/:id',
  PadresControllers.ObtenerPadresPorMaestro
);
api.post('/busqueda-padres', PadresControllers.BusquedaDePadres);
api.post('/insertar-padres', PadresControllers.InsertarPadres);
api.put('/actualizar-padres', PadresControllers.EditarPadres);
api.put('/borrar-padres-boveda/:id', PadresControllers.MoverABovedaEliminados);
api.delete('/borrar-padres-def/:id', PadresControllers.EliminarPadre);

module.exports = api;
