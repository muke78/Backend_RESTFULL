import { connectionQuery } from "../../../helpers/connection.helper.js";
import {
  methodError,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";

export const EliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    if (id) {
      const queryValidate = `SELECT * FROM users WHERE id = ?`;
      const queryParamsValidate = [id];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate,
      );

      if (resultValidate.length === 0) return methodNotFound(req, res);
    }
    const queryDelete = `DELETE FROM users WHERE id = ?`;
    const result = await connectionQuery(queryDelete, [id]);

    if (result.affectedRows > 0) {
      methodOK(req, res, {
        message: "El recurso fue eliminado correctamente.",
      });
    } else {
      methodNotFound(req, res);
    }
  } catch (error) {
    methodError(req, res, error);
  }
};

export const DeleteUserBulk = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0)
      return methodIncorrect(req, res);

    const MAX_IDS = 600;
    if (ids.length > MAX_IDS) {
      return methodIncorrect(
        req,
        res,
        `No se pueden eliminar más de ${MAX_IDS} usuarios en una sola solicitud`,
      );
    }

    const batchSize = 100;
    const totalBatches = Math.ceil(ids.length / batchSize);

    for (let i = 0; i < totalBatches; i++) {
      const batch = ids.slice(i * batchSize, (i + 1) * batchSize);
      const placeholders = batch.map(() => "?").join(",");
      const queryDeleteBulkUsers = `DELETE FROM users WHERE id IN (${placeholders})`;
      await connectionQuery(queryDeleteBulkUsers, batch);
    }
    methodOK(req, res, {
      message: `Se eliminaron ${ids.length} usuarios correctamente`,
    });
  } catch (error) {
    methodError(req, res, error);
  }
};
