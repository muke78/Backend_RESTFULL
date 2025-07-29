import express from "express";

import {
  DeleteUnit,
  GetAllUnits,
  InsertUnit,
  UpdateUnit,
} from "../controllers/units/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatUnits = express.Router();

// GET /api/units/list_of_units
apiCatUnits.get("/", verificarToken, async (request, response, next) => {
  try {
    const result = await GetAllUnits();
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// POST /api/units/create
apiCatUnits.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertUnit = request.body;
    const result = await InsertUnit(insertUnit);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamente una nueva unidad",
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/units/update/:id
apiCatUnits.put(
  "/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const unitId = request.params.id;
      const unitData = request.body;
      const result = await UpdateUnit(unitId, unitData);
      methodOK(
        request,
        response,
        result,
        "La unidad se actualizo correctamente",
      );
    } catch (error) {
      next(error);
    }
  },

  // DELETE /api/units/delete/:id
  apiCatUnits.delete(
    "/:id",
    verificarToken,
    async (request, response, next) => {
      try {
        const unitId = request.params.id;
        const result = await DeleteUnit(unitId);
        methodOK(
          request,
          response,
          undefined,
          `La unidad ${result.name} fue eliminado correctamente`,
        );
      } catch (error) {
        next(error);
      }
    },
  ),
);

export { apiCatUnits };
