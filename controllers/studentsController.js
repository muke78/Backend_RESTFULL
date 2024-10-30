import { connectionQuery } from '../helpers/connection.helper.js';

const ObtenerTodosLosEstudiantes = async (req, res) => {
  try {
    const [result] = await connectionQuery('CALL ObtenerEstudiantesActivos()');

    if (result.length === 0)
      return res.status(404).json({ message: 'No se encontraron estudiantes' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const ObtenerEstudiantesDadosBaja = async (req, res) => {};

const ObtenerEsttudiantesPorMaestro = async (req, res) => {};

const ObtenerEstudiantesPorPapas = async (req, res) => {};

const BusquedaDeEstudiantes = async (req, res) => {};

const InsertarEstudiantes = async (req, res) => {};

const EditarEstudiantes = async (req, res) => {};

const MoverABovedaEliminados = async (req, res) => {};

const EliminarEstudiante = async (req, res) => {};

export default {
  ObtenerTodosLosEstudiantes,
  ObtenerEstudiantesDadosBaja,
  ObtenerEsttudiantesPorMaestro,
  ObtenerEstudiantesPorPapas,
  BusquedaDeEstudiantes,
  InsertarEstudiantes,
  EditarEstudiantes,
  MoverABovedaEliminados,
  EliminarEstudiante,
};
