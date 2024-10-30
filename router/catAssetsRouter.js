import express from 'express';
import CatActivosControllers from '../controllers/catAssetsControllers.js';
import { verificarToken } from '../middleware/verificarToken.js';
const apiCatActivos = express.Router();

apiCatActivos.get(
  '/lista-activos',
  CatActivosControllers.ObtenerTodosLosActivos
);

apiCatActivos.get(
  '/lista-activos-desuso',
  CatActivosControllers.ObtenerTodosLosActivosDesuso
);

apiCatActivos.post('/agregar-activo', CatActivosControllers.InsertarActivo);

apiCatActivos.put('/actualizar-activo', CatActivosControllers.EditarActivo);

apiCatActivos.delete(
  '/eliminar-activo/:id',
  CatActivosControllers.EliminarActivo
);

export { apiCatActivos };
