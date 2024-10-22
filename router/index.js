import express from 'express';
import { apiMaestros } from './maestrosRouter.js';
import { apiUsuarios } from './usuariosRouter.js';
import { apiPadres } from './padresRouter.js';
import { apiCatInventario } from './catInventarioRouter.js';

const router = express.Router();

router.use('/api/v1', apiMaestros, apiUsuarios, apiPadres, apiCatInventario);

export { router };
