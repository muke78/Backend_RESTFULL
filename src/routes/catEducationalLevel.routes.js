import express from "express";

import {
  DeleteEducationLevel,
  GetAllEducationsLevel,
  InsertEducationLevel,
  UpdateEducationLevel,
} from "../controllers/educationLevel/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatEducationalLevel = express.Router();

// GET /api/education_level/list_of_education_level
apiCatEducationalLevel.get(
  "/",
  verificarToken,
  async (request, response, next) => {
    try {
      const result = await GetAllEducationsLevel();
      methodOK(request, response, result);
    } catch (error) {
      next(error);
    }
  },
);

// POST /api/education_level/create
apiCatEducationalLevel.post(
  "/",
  verificarToken,
  async (request, response, next) => {
    try {
      const insertEducationLevel = request.body;
      const result = await InsertEducationLevel(insertEducationLevel);
      methodCreated(
        request,
        response,
        result,
        "Se inserto correctamente un nuevo nivel educativo",
      );
    } catch (error) {
      next(error);
    }
  },
);

// PUT /api/education_level/update/:id
apiCatEducationalLevel.put(
  "/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const educationLevelId = request.params.id;
      const educationLevelData = request.body;
      const result = await UpdateEducationLevel(
        educationLevelId,
        educationLevelData,
      );
      methodOK(
        request,
        response,
        result,
        "El nivel educativo se actualizo correctamente",
      );
    } catch (error) {
      next(error);
    }
  },

  // DELETE /api/education_level/delete/:id
  apiCatEducationalLevel.delete(
    "/:id",
    verificarToken,
    async (request, response, next) => {
      try {
        const educationLevelId = request.params.id;
        const result = await DeleteEducationLevel(educationLevelId);
        methodOK(
          request,
          response,
          undefined,
          `El nivel educativo ${result.name} fue eliminado correctamente`,
        );
      } catch (error) {
        next(error);
      }
    },
  ),
);

export { apiCatEducationalLevel };
