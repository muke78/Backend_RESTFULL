import express from "express";

import { apiCatActivos } from "./catAssetsRouter.js";
import { apiCatInventario } from "./catInventarioRouter.js";
import { apiCatInsumos } from "./catSuppliesRouter.js";
import { apiGoogle } from "./google.route.js";
import { apiMaestros } from "./maestrosRouter.js";
import { apiPadres } from "./padresRouter.js";
import { apiEstudiantes } from "./studentsRouter.js";
import { apiToken } from "./token.routes.js";
import { apiUsuarios } from "./users.routes.js";

const router = express.Router();

// router.use(
//   "/api/v1",
//   apiMaestros,
//   apiGoogle,
//   apiPadres,
//   apiCatInventario,
//   apiCatInsumos,
//   apiCatActivos,
//   apiEstudiantes,
// );

router.use("/api/v1/users", apiUsuarios, apiGoogle);
router.use("/api/v1/token", apiToken);

export { router };
