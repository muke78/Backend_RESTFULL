import express from 'express';
import { verificarToken } from '../middleware/verificarToken.js';
import PadresControllers from '../controllers/padresControllers.js';

const apiPadres = express.Router();
apiPadres.use(express.json());

apiPadres.get('/lista-de-padres', PadresControllers.ObtenerTodosLosPapas);
apiPadres.get('/lista-de-padres-eliminados', PadresControllers.ObtenerPadresEliminados);
apiPadres.post('/lista-padres-maestro/:id', PadresControllers.ObtenerPadresPorMaestro);
apiPadres.post('/busqueda-padres', PadresControllers.BusquedaDePadres);
apiPadres.post('/insertar-padres', PadresControllers.InsertarPadres);
apiPadres.put('/actualizar-padres', PadresControllers.EditarPadres);
apiPadres.put('/borrar-padres-boveda/:id', PadresControllers.MoverABovedaEliminados);
apiPadres.delete('/borrar-padres-def/:id', PadresControllers.EliminarPadre);

export { apiPadres };
