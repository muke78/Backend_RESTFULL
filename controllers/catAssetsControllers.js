import { connectionQuery } from "../helpers/connection.helper.js";
import {
  methodCreated,
  methodError,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../server/serverMethods.js";

const ObtenerTodosLosActivos = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catassets WHERE Status = "Activo"`,
    );

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ObtenerTodosLosActivosDesuso = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catassets WHERE Status = "Inactivo"`,
    );

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const InsertarActivo = async (req, res) => {
  try {
    const {
      name,
      description,
      purchaseDate,
      cost,
      location,
      condition,
      lastMaintenanceDate,
      warrantyEndDate,
    } = req.body;

    if (
      !name ||
      !description ||
      !purchaseDate ||
      !cost ||
      !location ||
      !condition ||
      !lastMaintenanceDate ||
      !warrantyEndDate
    ) {
      return methodIncorrect(req, res);
    }

    const queryInsert = `INSERT INTO catassets(ID, Name, Description, PurchaseDate, Cost, Location, \`Condition\`, LastMaintenanceDate, WarrantyEndDate) 
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?);`;

    const queryParamsInsert = [
      name,
      description,
      purchaseDate,
      cost,
      location,
      condition,
      lastMaintenanceDate,
      warrantyEndDate,
    ];

    const result = await connectionQuery(queryInsert, queryParamsInsert);

    if (result.affectedRows > 0)
      return methodCreated(req, res, queryParamsInsert);
  } catch (error) {
    methodError(req, res, error);
  }
};

const EditarActivo = async (req, res) => {
  try {
    const {
      name,
      description,
      purchaseDate,
      cost,
      location,
      condition,
      status,
      lastMaintenanceDate,
      warrantyEndDate,
      id,
    } = req.body;

    const queryUpdate = `UPDATE catassets SET Name = ?, Description  = ?, PurchaseDate = ?, Cost = ?, Location = ?, \`Condition\` = ?, Status = ?, LastMaintenanceDate = ?, WarrantyEndDate = ? WHERE ID = ?`;
    const queryUpdateParams = [
      name,
      description,
      purchaseDate,
      cost,
      location,
      condition,
      status,
      lastMaintenanceDate,
      warrantyEndDate,
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

    const queryDelete = `UPDATE catassets SET Status = 'Inactivo' WHERE ID = ?`;
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

const EliminarActivo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    const queryDeleteSupplier = `DELETE FROM catassets WHERE ID = ?`;
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
  ObtenerTodosLosActivos,
  ObtenerTodosLosActivosDesuso,
  InsertarActivo,
  EditarActivo,
  MoverABovedaEliminados,
  EliminarActivo,
};
