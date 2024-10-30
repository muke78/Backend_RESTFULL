import express from 'express';
import { verificarToken } from '../middleware/verificarToken.js';
import EstudiantesControllers from '../controllers/studentsController.js';

const apiEstudiantes = express.Router();

apiEstudiantes.get(
  '/lista-estudiantes',
  EstudiantesControllers.ObtenerTodosLosEstudiantes
);

export { apiEstudiantes };
