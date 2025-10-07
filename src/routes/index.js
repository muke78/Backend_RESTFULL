import express from "express";

import { apiCatAssets } from "./catAssets.routes.js";
import { apiCatClassrooms } from "./catClassrooms.routes.js";
import { apiCatConditions } from "./catConditions.routes.js";
import { apiCatEducationalLevel } from "./catEducationalLevel.routes.js";
import { apiCatGender } from "./catGender.routes.js";
import { apiCatInventory } from "./catInventory.routes.js";
import { apiCatSupply } from "./catSupplies.routes.js";
import { apiCatUnits } from "./catUnits.routes.js";
import { apiGoogle } from "./google.route.js";
import { apiToken } from "./token.routes.js";
import { apiUsers } from "./users.routes.js";
import { apiAuth } from "./auth.routes.js";

import { config } from "../config/config.js";

// import { apiMaestros } from "./maestrosRouter.js";
// import { apiPadres } from "./padresRouter.js";
// import { apiEstudiantes } from "./studentsRouter.js";

const router = express.Router();
const base = config.api.basePath;

router.use(`${base}/auth`, apiAuth);
router.use(`${base}/users`, apiUsers, apiGoogle);
router.use(`${base}/token`, apiToken);
router.use(`${base}/assets`, apiCatAssets);
router.use(`${base}/inventory`, apiCatInventory);
router.use(`${base}/supply`, apiCatSupply);
router.use(`${base}/conditions`, apiCatConditions);
router.use(`${base}/classrooms`, apiCatClassrooms);
router.use(`${base}/eduLev`, apiCatEducationalLevel);
router.use(`${base}/gender`, apiCatGender);
router.use(`${base}/units`, apiCatUnits);

export { router };
