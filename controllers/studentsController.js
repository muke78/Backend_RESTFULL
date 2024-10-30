import { connectionQuery } from '../helpers/connection.helper.js';
import {
  methodOK,
  methodNotFound,
  methodError,
} from '../server/serverMethods.js';

const ObtenerTodosLosEstudiantes = async (req, res) => {
  try {
    const [result] = await connectionQuery('CALL ObtenerEstudiantesActivos()');

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ObtenerEstudiantesPorMaestro = async (req, res) => {};

const ObtenerEstudiantesPorPapas = async (req, res) => {};

const BusquedaDeEstudiantes = async (req, res) => {};

const InsertarEstudiantes = async (req, res) => {};

const EditarEstudiantes = async (req, res) => {};

const MoverABovedaEliminados = async (req, res) => {};

const EliminarEstudiante = async (req, res) => {};

export default {
  ObtenerTodosLosEstudiantes,
  ObtenerEstudiantesPorMaestro,
  ObtenerEstudiantesPorPapas,
  BusquedaDeEstudiantes,
  InsertarEstudiantes,
  EditarEstudiantes,
  MoverABovedaEliminados,
  EliminarEstudiante,
};
