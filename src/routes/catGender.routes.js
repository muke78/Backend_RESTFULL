import express from "express";

import {
  DeleteGender,
  GetAllGender,
  InsertGender,
  UpdateGender,
} from "../controllers/gender/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatGender = express.Router();

// GET /api/gender/list_of_gender
apiCatGender.get("/", verificarToken, async (request, response, next) => {
  try {
    const result = await GetAllGender();
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// POST /api/gender/create
apiCatGender.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertGender = request.body;
    const result = await InsertGender(insertGender);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamente un nuevo genero",
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/gender/update/:id
apiCatGender.put(
  "/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const genderId = request.params.id;
      const genderData = request.body;
      const result = await UpdateGender(genderId, genderData);
      methodOK(
        request,
        response,
        result,
        "El genero se actualizo correctamente",
      );
    } catch (error) {
      next(error);
    }
  },

  // DELETE /api/gender/delete/:id
  apiCatGender.delete(
    "/:id",
    verificarToken,
    async (request, response, next) => {
      try {
        const genderId = request.params.id;
        const result = await DeleteGender(genderId);
        methodOK(
          request,
          response,
          undefined,
          `El genero ${result.name} fue eliminado correctamente`,
        );
      } catch (error) {
        next(error);
      }
    },
  ),
);

export { apiCatGender };
