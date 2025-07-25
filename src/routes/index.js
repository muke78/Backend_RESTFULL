import express from "express";

import { apiCatAssets } from "./catAssets.routes.js";
import { apiCatClassrooms } from "./catClassrooms.routes.js";
import { apiCatConditions } from "./catConditions.routes.js";
import { apiCatInventory } from "./catInventory.routes.js";
import { apiCatSupply } from "./catSupplies.routes.js";
import { apiGoogle } from "./google.route.js";
import { apiMaestros } from "./maestrosRouter.js";
import { apiPadres } from "./padresRouter.js";
import { apiEstudiantes } from "./studentsRouter.js";
import { apiToken } from "./token.routes.js";
import { apiUsers } from "./users.routes.js";

const router = express.Router();

router.use("/api/v1/users", apiUsers, apiGoogle);
router.use("/api/v1/token", apiToken);
router.use("/api/v1/assets", apiCatAssets);
router.use("/api/v1/inventory", apiCatInventory);
router.use("/api/v1/supply", apiCatSupply);
router.use("/api/v1/conditions", apiCatConditions);
router.use("/api/v1/classrooms", apiCatClassrooms);

export { router };
