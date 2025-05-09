import express from "express";

import EstudiantesControllers from "../controllers/studentsController.js";
import { verificarToken } from "../middleware/verificarToken.js";

const apiEstudiantes = express.Router();

apiEstudiantes.get(
  "/lista-estudiantes",
  EstudiantesControllers.ObtenerTodosLosEstudiantes,
);

export { apiEstudiantes };
