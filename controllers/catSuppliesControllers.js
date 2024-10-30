import { connectionQuery } from '../helpers/connection.helper.js';

const ObtenerTodosLosInsumos = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catsupplies WHERE Status = "Activo"`
    );

    if (result.length === 0)
      return res.status(404).json({ message: 'No hay nada en los insumos' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const ObtenerTodosLosInsumosDesuso = async (req, res) => {
  try {
    const result = await connectionQuery(
      `SELECT * FROM catsupplies WHERE Status = "Inactivo"`
    );

    if (result.length === 0)
      return res
        .status(404)
        .json({ message: 'No hay nada en los insumos en desuso' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
      return res.status(400).json({ message: 'Los campos son requeridos' });
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

    await connectionQuery(queryInsert, queryParamsInsert);

    res.status(201).json({ message: 'El insumo fue creado con exito' });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

    await connectionQuery(queryUpdate, queryUpdateParams);
    res.status(200).json({ message: 'Se actualizo el insumo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const EliminarInsumo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ message: 'No se envió el ID o no es válido' });
    }

    const queryDeleteSupplier = `DELETE FROM catsupplies WHERE ID = ?`;
    await connectionQuery(queryDeleteSupplier, [id]);

    res.status(200).json({ message: 'Se elimino correctamente el insumo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  ObtenerTodosLosInsumos,
  ObtenerTodosLosInsumosDesuso,
  InsertarInsumo,
  EditarInsumo,
  EliminarInsumo,
};
