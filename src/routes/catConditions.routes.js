import express from "express";

import {
  DeleteCondition,
  GetAllConditions,
  InsertConditions,
  UpdateConditions,
} from "../controllers/conditions/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatConditions = express.Router();

// GET /api/conditions/list_of_conditions
apiCatConditions.get("/", verificarToken, async (request, response, next) => {
  try {
    const result = await GetAllConditions();
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// POST /api/conditions/create
apiCatConditions.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertConditions = request.body;
    const result = await InsertConditions(insertConditions);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamente las condiciones",
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/conditions/update/:id
apiCatConditions.put(
  "/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const conditionsId = request.params.id;
      const conditionsData = request.body;
      const result = await UpdateConditions(conditionsId, conditionsData);
      methodOK(
        request,
        response,
        result,
        "La condicion se actualizo correctamente",
      );
    } catch (error) {
      next(error);
    }
  },

  // DELETE /api/conditions/delete/:id
  apiCatConditions.delete(
    "/:id",
    verificarToken,
    async (request, response, next) => {
      try {
        const conditionId = request.params.id;
        const result = await DeleteCondition(conditionId);
        methodOK(
          request,
          response,
          undefined,
          `La condicion ${result.name} fue eliminada correctamente`,
        );
      } catch (error) {
        next(error);
      }
    },
  ),
);

export { apiCatConditions };
