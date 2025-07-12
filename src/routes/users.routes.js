import express from "express";

import {
  DeleteUser,
  DeleteUserBulk,
  GetAllUsers,
  InsertUsers,
  InsertUsersMasive,
  Login,
  RegisterUser,
  SearchOfUsers,
  UpdateUser,
} from "../controllers/users/index.js";
import { verificarToken } from "../middleware/verificarToken.middleware.js";
import { methodCreated, methodOK } from "../server/serverMethods.js";

const apiUsers = express.Router();

// GET /api/users/list_of_users
apiUsers.get("/", verificarToken, async (request, response, next) => {
  try {
    const listUsers = request.query;
    const result = await GetAllUsers(listUsers);
    methodOK(request, response, result);
  } catch (error) {
    next(error);
  }
});

// GET /api/users/search
apiUsers.get("/search", verificarToken, async (request, response, next) => {
  try {
    const { email } = request.query;
    const result = await SearchOfUsers(email);
    methodOK(request, response, result, "Busqueda realizada correctamente");
  } catch (error) {
    next(error);
  }
});

//POST /api/users/create
apiUsers.post("/", verificarToken, async (request, response, next) => {
  try {
    const insertUser = request.body;
    const result = await InsertUsers(insertUser);
    methodCreated(
      request,
      response,
      result,
      "Se inserto correctamente el usuario",
    );
  } catch (error) {
    next(error);
  }
});

//POST /api/users/masive
apiUsers.post("/bulk", verificarToken, async (request, response, next) => {
  try {
    const { countInsert } = request.body;
    const result = await InsertUsersMasive(countInsert);
    methodCreated(
      request,
      response,
      `Se insertaron correctamente ${result.length} usuarios como prueba`,
    );
  } catch (error) {
    next(error);
  }
});

//POST /api/users/register
apiUsers.post("/auth/register", async (request, response, next) => {
  try {
    const registerUser = request.body;
    const result = await RegisterUser(registerUser);
    methodCreated(
      request,
      response,
      result,
      "Se registro correctamente el usuario",
    );
  } catch (error) {
    next(error);
  }
});

//POST /api/users/auth/login
apiUsers.post("/auth/login", async (request, response, next) => {
  try {
    const userData = request.body;
    const token = await Login(userData);
    methodOK(request, response, token, "Sesion iniciada correctamente");
  } catch (error) {
    next(error);
  }
});

//PUT /api/users/update/:id
apiUsers.put("/:id", verificarToken, async (request, response, next) => {
  try {
    const userId = request.params.id;
    const userData = request.body;
    const result = await UpdateUser(userId, userData);
    methodOK(
      request,
      response,
      result,
      "El usuario se actualizo correctamente",
    );
  } catch (error) {
    next(error);
  }
});

//DELETE /api/users/bulk_delete_users
apiUsers.delete("/bulk", verificarToken, async (request, response, next) => {
  try {
    const { ids } = request.body;
    await DeleteUserBulk(ids);
    methodOK(request, response, {
      message: `Se eliminaron ${request.body.ids.length} usuarios correctamente`,
    });
  } catch (error) {
    next(error);
  }
});

//DELETE /api/users/delete/:id
apiUsers.delete("/:id", verificarToken, async (request, response, next) => {
  try {
    const userId = request.params.id;
    const result = await DeleteUser(userId);
    methodOK(
      request,
      response,
      undefined,
      `El usuario ${result.NameUser} fue eliminado correctamente`,
    );
  } catch (error) {
    next(error);
  }
});

export { apiUsers };
