import express from "express";

import { apiCatActivos } from "./catAssetsRouter.js";
import { apiCatInventario } from "./catInventarioRouter.js";
import { apiCatInsumos } from "./catSuppliesRouter.js";
import { apiMaestros } from "./maestrosRouter.js";
import { apiPadres } from "./padresRouter.js";
import { apiEstudiantes } from "./studentsRouter.js";
import { apiUsuarios } from "./usuariosRouter.js";
import { apiGoogle } from "./googleRoute.js";

const router = express.Router();

router.use(
  "/api/v1",
  apiMaestros,
  apiUsuarios,
  apiGoogle,
  apiPadres,
  apiCatInventario,
  apiCatInsumos,
  apiCatActivos,
  apiEstudiantes,
);

export { router };
