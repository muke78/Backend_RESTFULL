import { connectionQuery } from '../helpers/connection.helper.js';

const ObtenerTodosLosActivos = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catassets WHERE Status = "Activo"`
    );

    if (result.length === 0)
      return res.status(404).json({ message: 'No hay nada en los activos' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const ObtenerTodosLosActivosDesuso = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catassets WHERE Status = "Inactivo"`
    );

    if (result.length === 0)
      return res
        .status(404)
        .json({ message: 'No hay nada en los activos no ocupados' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
      return res.status(400).json({ message: 'Los campos son requeridos' });
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

    await connectionQuery(queryInsert, queryParamsInsert);

    res.status(201).json({ message: 'El activo fue creado con exito' });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

    await connectionQuery(queryUpdate, queryUpdateParams);
    res.status(200).json({ message: 'Se actualizo el activo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const EliminarActivo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ message: 'No se envió el ID o no es válido' });
    }

    const queryDeleteSupplier = `DELETE FROM catassets WHERE ID = ?`;
    await connectionQuery(queryDeleteSupplier, [id]);

    res.status(200).json({ message: 'Se elimino correctamente el activo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  ObtenerTodosLosActivos,
  ObtenerTodosLosActivosDesuso,
  InsertarActivo,
  EditarActivo,
  EliminarActivo,
};
