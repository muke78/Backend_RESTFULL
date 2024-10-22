import { connectionQuery } from '../helpers/connection.helper.js';

const ObtenerTodoElInnventario = async (req, res) => {
  try {
    const result = await connectionQuery('SELECT * FROM catinventory');

    if (result.length === 0)
      return res.status(404).send({ message: 'No hya nada en el inventario' });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
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
      return res.status(400).send({ message: 'Los campos son requeridos' });
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

    await connectionQuery(queryInsert, queryParamsInsert);

    res.status(201).send({ message: 'Inventario creado con exito' });
  } catch (error) {
    res.status(500).send({ message: error.message });
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
      id,
    } = req.body;

    const queryUpdate = `UPDATE catinventory SET ItemCode = ?, Name = ?, Description = ?, Quantity = ?, Weight = ?, Width = ?, Height = ?, Location = ?, \`Condition\` = ?, PurchaseDate = ? WHERE ID = ?`;
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
      id,
    ];
    await connectionQuery(queryUpdate, queryParamsUpdate);
    res.status(200).send({ message: 'Se actualizo el item' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const EliminarInventario = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .send({ message: 'No se envió el ID o no es válido' });
    }

    const queryDeleteInventory = `DELETE FROM catinventory WHERE ID = ?`;
    await connectionQuery(queryDeleteInventory, [id]);

    res.status(200).send({ message: 'Se elimino correctamente el item' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default {
  ObtenerTodoElInnventario,
  InsertarInventario,
  EditarInventario,
  EliminarInventario,
};
