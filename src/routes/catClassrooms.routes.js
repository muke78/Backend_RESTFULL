import express from "express";

import {
  DeleteClassroom,
  GetAllClassrooms,
  InsertClassrooms,
  UpdateClassrooms,
} from "../controllers/classrooms/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiCatClassrooms = express.Router();

// GET /api/classrooms/list_of_classrooms
apiCatClassrooms.get("/", verificarToken, async (request, response, next) => {
  try {
    const result = await GetAllClassrooms();
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// POST /api/classrooms/create
apiCatClassrooms.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertClassrooms = request.body;
    const result = await InsertClassrooms(insertClassrooms);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamente un nuevo salon",
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/classrooms/update/:id
apiCatClassrooms.put(
  "/:id",
  verificarToken,
  async (request, response, next) => {
    try {
      const classroomsId = request.params.id;
      const classroomsData = request.body;
      const result = await UpdateClassrooms(classroomsId, classroomsData);
      methodOK(
        request,
        response,
        result,
        "El salon se actualizo correctamente",
      );
    } catch (error) {
      next(error);
    }
  },

  // DELETE /api/classrooms/delete/:id
  apiCatClassrooms.delete(
    "/:id",
    verificarToken,
    async (request, response, next) => {
      try {
        const classroomId = request.params.id;
        const result = await DeleteClassroom(classroomId);
        methodOK(
          request,
          response,
          undefined,
          `El salon ${result.name} fue eliminado correctamente`,
        );
      } catch (error) {
        next(error);
      }
    },
  ),
);

export { apiCatClassrooms };
