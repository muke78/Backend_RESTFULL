import { connectionQuery } from "../helpers/connection.helper.js";
import {
  methodCreated,
  methodError,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../server/serverMethods.js";

const ObtenerTodoElInnventario = async (req, res) => {
  try {
    const result = await connectionQuery(
      'SELECT * FROM catinventory WHERE Status = "Activo"',
    );

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ObtenerInventarioDesuso = async (req, res) => {
  try {
    const result = await connectionQuery(
      'SELECT * FROM catinventory WHERE Status = "Inactivo"',
    );
    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const InsertarInventario = async (req, res) => {
  try {
    const {
      itemCode,
      name,
      description,
      quantity,
      weight,
      width,
      height,
      location,
      condition,
      purchaseDate,
    } = req.body;

    if (
      !itemCode ||
      !name ||
      !description ||
      !quantity ||
      !weight ||
      !width ||
      !height ||
      !location ||
      !condition ||
      !purchaseDate
    ) {
      return methodIncorrect(req, res);
    }

    const queryInsert = `INSERT INTO catinventory (ID, ItemCode, Name, Description, Quantity, Weight, Width, Height, Location, \`Condition\`, PurchaseDate)
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const queryParamsInsert = [
      itemCode,
      name,
      description,
      quantity,
      weight,
      width,
      height,
      location,
      condition,
      purchaseDate,
    ];

    const result = await connectionQuery(queryInsert, queryParamsInsert);

    if (result.affectedRows > 0)
      return methodCreated(req, res, queryParamsInsert);
  } catch (error) {
    methodError(req, res, error);
  }
};

const EditarInventario = async (req, res) => {
  try {
    const {
      itemCode,
      name,
      description,
      quantity,
      weight,
      width,
      height,
      location,
      condition,
      purchaseDate,
      status,
      id,
    } = req.body;

    const queryUpdate = `UPDATE catinventory SET ItemCode = ?, Name = ?, Description = ?, Quantity = ?, Weight = ?, Width = ?, Height = ?, Location = ?, \`Condition\` = ?, PurchaseDate = ?, Status = ? WHERE ID = ?`;
    const queryParamsUpdate = [
      itemCode,
      name,
      description,
      quantity,
      weight,
      width,
      height,
      location,
      condition,
      purchaseDate,
      status,
      id,
    ];
    const result = await connectionQuery(queryUpdate, queryParamsUpdate);

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

    const queryDelete = `UPDATE catinventory SET Status = 'Inactivo' WHERE ID = ?`;
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

const EliminarInventario = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    const queryDeleteInventory = `DELETE FROM catinventory WHERE ID = ?`;
    const result = await connectionQuery(queryDeleteInventory, [id]);

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
  ObtenerTodoElInnventario,
  ObtenerInventarioDesuso,
  InsertarInventario,
  EditarInventario,
  MoverABovedaEliminados,
  EliminarInventario,
};
