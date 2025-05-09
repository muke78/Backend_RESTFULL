import { connectionQuery } from "../helpers/connection.helper.js";
import {
  methodCreated,
  methodError,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../server/serverMethods.js";

const ObtenerTodosLosInsumos = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catsupplies WHERE Status = "Activo"`,
    );

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ObtenerTodosLosInsumosDesuso = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catsupplies WHERE Status = "Inactivo"`,
    );

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const InsertarInsumo = async (req, res) => {
  try {
    const {
      name,
      description,
      quantity,
      unit,
      supplier,
      purchaseDate,
      expiryDate,
      cost,
    } = req.body;

    if (
      !name ||
      !description ||
      !quantity ||
      !unit ||
      !supplier ||
      !purchaseDate ||
      !cost
    ) {
      return methodIncorrect(req, res);
    }

    const queryInsert = `INSERT INTO catsupplies (ID, Name, Description, Quantity, Unit, Supplier, PurchaseDate, ExpiryDate, Cost) 
    VALUES (UUID(),? ,? ,? ,? ,? ,? ,? ,? );`;

    const queryParamsInsert = [
      name,
      description,
      quantity,
      unit,
      supplier,
      purchaseDate,
      expiryDate,
      cost,
    ];

    const result = await connectionQuery(queryInsert, queryParamsInsert);

    if (result.affectedRows > 0)
      return methodCreated(req, res, queryParamsInsert);
  } catch (error) {
    methodError(req, res, error);
  }
};

const EditarInsumo = async (req, res) => {
  try {
    const {
      name,
      description,
      quantity,
      unit,
      supplier,
      purchaseDate,
      expiryDate,
      cost,
      status,
      id,
    } = req.body;

    const queryUpdate = `UPDATE catsupplies SET Name = ?, Description = ?, Quantity = ?, Unit = ?, Supplier = ?, PurchaseDate = ?, ExpiryDate = ?, Cost = ?, Status = ? WHERE ID = ?`;
    const queryUpdateParams = [
      name,
      description,
      quantity,
      unit,
      supplier,
      purchaseDate,
      expiryDate,
      cost,
      status,
      id,
    ];

    const result = await connectionQuery(queryUpdate, queryUpdateParams);
    if (result.affectedRows > 0) {
      methodOK(req, res, {
        message: "El recurso fue actualizado correctamente.",
      });
    } else {
      methodNotFound(req, res, {
        message: "No se encontró el recurso para actualizar.",
      });
    }
  } catch (error) {
    methodError(req, res, error);
  }
};

const MoverABovedaEliminados = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    const queryDelete = `UPDATE catsupplies SET Status = 'Inactivo' WHERE ID = ?`;
    const queryParamsDelete = [id];
    const result = await connectionQuery(queryDelete, queryParamsDelete);

    if (result.affectedRows > 0) {
      methodOK(req, res, {
        message: "El recurso fue mandado a la boveda correctamente.",
      });
    } else {
      methodNotFound(req, res);
    }
  } catch (error) {
    methodError(req, res, error);
  }
};

const EliminarInsumo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    const queryDeleteSupplier = `DELETE FROM catsupplies WHERE ID = ?`;
    const result = await connectionQuery(queryDeleteSupplier, [id]);

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

export default {
  ObtenerTodosLosInsumos,
  ObtenerTodosLosInsumosDesuso,
  InsertarInsumo,
  EditarInsumo,
  MoverABovedaEliminados,
  EliminarInsumo,
};
