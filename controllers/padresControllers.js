import { connectionQuery } from '../helpers/connection.helper.js';

const ObtenerTodosLosPapas = async (req, res) => {
  try {
    const [result] = await connectionQuery('CALL ObtenerPadresActivos()');

    if (result.length === 0)
      return res.status(404).json({ message: 'No se encontraron padres' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const ObtenerPadresEliminados = async (req, res) => {
  try {
    const obtenerPadresDelete = `SELECT * FROM parents WHERE Status = "Inactivo" ORDER BY LastName ASC;`;
    const result = await connectionQuery(obtenerPadresDelete);

    if (result.length === 0)
      return res.status(404).json({ message: 'No hay padres eliminados' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const ObtenerPadresPorMaestro = async (req, res) => {
  try {
    const { id } = req.params;

    const verifyTeacher = `SELECT * FROM parents WHERE TeacherID = ?;`;
    const resultVerify = await connectionQuery(verifyTeacher, [id]);

    if (resultVerify.length === 0)
      return res
        .status(404)
        .json({ message: 'No se encontro ningun maestro con ese id' });

    const [result] = await connectionQuery(`CALL ObtenerPadresPorMaestro(?)`, [
      id,
    ]);

    if (result.length === 0)
      return res.status(404).json({
        message:
          'No se encontraron padres que se relacionen con el maestro o estan en la boveda',
      });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const BusquedaDePadres = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    let querySearch = `SELECT * FROM parents WHERE 1=1`;
    const queryParams = [];

    if (email) {
      querySearch += ' AND email LIKE ?';
      queryParams.push(`%${email}%`);
    }

    if (firstName) {
      querySearch += ' AND FirstName LIKE ?';
      queryParams.push(`%${firstName}%`);
    }

    if (lastName) {
      querySearch += ' AND LastName LIKE ?';
      queryParams.push(`%${lastName}%`);
    }

    const resultSearch = await connectionQuery(querySearch, queryParams);

    if (resultSearch.length === 0)
      return res.status(404).json({
        message: ' Papá o Mamá no encontrados, intente buscar con otro',
      });
    res.status(200).json(resultSearch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const InsertarPadres = async (req, res) => {
  try {
    const {
      teacherID,
      firstName,
      lastName,
      dateOfBirth,
      ocupation,
      gender,
      curp,
      email,
      phone,
      age,
      address,
      emergencyContact,
      emergencyPhone,
    } = req.body;

    if (
      !teacherID ||
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !ocupation ||
      !gender ||
      !curp ||
      !email ||
      !phone ||
      !age ||
      !address ||
      !emergencyContact ||
      !emergencyPhone
    ) {
      return res.status(400).json({ message: 'Los campos son requeridos' });
    }

    if (email && email.trim()) {
      const queryValidate = `SELECT * FROM parents WHERE Email = ?`;
      const queryParamsValidate = [email];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length > 0) {
        const { Status } = resultValidate[0];

        if (Status === 'Activo') {
          return res.status(409).json({
            message: 'El correo ya se encuentra registrado',
          });
        } else if (Status === 'Inactivo') {
          return res.status(500).json({
            message:
              'El correo existe pero la mamá o el papá está eliminado, eliminelo definitivamente o editelo',
          });
        }
      }
    }

    if (age > 100) {
      return res
        .status(400)
        .json({ message: 'La edad no puede ser mayor a 100 años' });
    }

    const queryInsert = `INSERT INTO parents(ID, TeacherID, FirstName, LastName, DateOfBirth, Ocupation, Gender, Curp, Email, Phone, Age,
                    Address, EmergencyContact, EmergencyPhone)
VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const queryParamsInsert = [
      teacherID,
      firstName,
      lastName,
      dateOfBirth,
      ocupation,
      gender,
      curp,
      email,
      phone,
      age,
      address,
      emergencyContact,
      emergencyPhone,
    ];

    await connectionQuery(queryInsert, queryParamsInsert);

    res.status(201).json({ message: 'Se creo con exito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear al papá o mamá', error });
  }
};

const EditarPadres = async (req, res) => {
  try {
    const {
      teacherID,
      firstName,
      lastName,
      dateOfBirth,
      ocupation,
      gender,
      curp,
      email,
      phone,
      age,
      address,
      emergencyContact,
      emergencyPhone,
      status,
      id,
    } = req.body;

    const queryUpdate = `UPDATE parents SET TeacherID = ?, FirstName = ?, LastName = ?, DateOfBirth = ?, Ocupation = ?, Gender = ?, Curp = ?, Email = ?, Phone = ?, Age = ?,
    Address = ?, EmergencyContact = ?, EmergencyPhone = ?, Status = ? WHERE ID = ?`;

    const queryParamsUpdate = [
      teacherID,
      firstName,
      lastName,
      dateOfBirth,
      ocupation,
      gender,
      curp,
      email,
      phone,
      age,
      address,
      emergencyContact,
      emergencyPhone,
      status,
      id,
    ];

    await connectionQuery(queryUpdate, queryParamsUpdate);
    res.status(200).json({ message: 'Se actualizo el papá o la mamá' });
  } catch (error) {
    res.status(500).json({
      message: 'Hubo un error en la actualizacion del registro',
      error,
    });
  }
};

const MoverABovedaEliminados = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ message: 'No se envio el ID o no es valido' });

    const queryDelete = `UPDATE parents SET Status = 'Inactivo' WHERE ID = ?`;
    const queryParamsDelete = [id];
    await connectionQuery(queryDelete, queryParamsDelete);

    res.status(200).json({
      message: 'Se mando a la boveda de eliminados o esta en la boveda',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Hubo un error al mandar a la boveda de eliminados',
      error,
    });
  }
};

const EliminarPadre = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ message: 'No se envió el ID o no es válido' });
    }

    const queryValidate = `SELECT * FROM parents WHERE ID = ?`;
    const queryParamsValidate = [id];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate
    );

    if (resultValidate.length === 0) {
      return res.status(404).json({ message: 'El papá o mamá no existe' });
    }

    const queryDeleteTeacher = `DELETE FROM parents WHERE ID = ?`;
    await connectionQuery(queryDeleteTeacher, [id]);

    res.status(200).json({
      message: 'Se eliminó definitivamente el papá o mamá',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Hubo un error al eliminar al papá o mamá',
      error,
    });
  }
};

export default {
  ObtenerTodosLosPapas,
  ObtenerPadresEliminados,
  ObtenerPadresPorMaestro,
  BusquedaDePadres,
  InsertarPadres,
  EditarPadres,
  MoverABovedaEliminados,
  EliminarPadre,
};
