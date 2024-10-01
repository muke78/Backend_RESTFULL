const { connectionQuery } = require('../helpers/connection.helper');

const ObtenerTodosLosMaestros = async (req, res) => {
  try {
    const obtenerUser = `SELECT * FROM teachers WHERE Status = 5 ORDER BY LastName ASC;`;
    const result = await connectionQuery(obtenerUser);

    if (result.length === 0)
      return res.status(404).json({ message: 'No se encontraron maestros' });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const ObtenerLosUsuariosEliminados = async (req, res) => {
  try {
    const obtenerUserDelete = `SELECT * FROM teachers WHERE Status = 6 ORDER BY LastName ASC;`;
    const result = await connectionQuery(obtenerUserDelete);

    if (result.length === 0)
      return res.status(404).send({ message: 'No hay maestros eliminados' });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const BusquedaDeMaestro = async (req, res) => {
  try {
    const { id, email, nameUser, firstName } = req.body;
    let querySearch = `SELECT * FROM teachers WHERE TeacherID = ?`;

    if (email || nameUser || firstName) {
      querySearch += ' OR Email = ? OR FirstName = ?;';
    }

    const queryParamsSearch = [id, email, nameUser, firstName];
    const resultSearch = await connectionQuery(querySearch, queryParamsSearch);

    if (resultSearch.length === 0)
      return res.status(404).json({ message: 'Maestro no encontrado, intente buscar con otro' });

    res.status(200).send(resultSearch[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const InsertarMaestro = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
      workShif,
      curp,
      email,
      age,
      phone,
      country,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !nameSchool ||
      !levelStudies ||
      !studentsInCharge ||
      !cct ||
      !schoolZone ||
      !workShif ||
      !curp ||
      !email ||
      !age ||
      !phone ||
      !country
    )
      return res.status(400).send({ message: 'Los campos son requeridos' });

    if (email && email.trim()) {
      const queryValidate = `SELECT * FROM teachers WHERE Email = ?`;
      const queryParamsValidate = [email];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length > 0) {
        const { Status } = resultValidate[0];

        if (Status === 5) {
          return res.status(500).send({
            message: 'El correo ya se encuentra registrado',
          });
        } else if (Status === 6) {
          return res.status(500).send({
            message:
              'El correo existe pero el maestro está eliminado, eliminelo definitivamente o editelo',
          });
        }
      }
    }

    if (age > 100) {
      return res
        .status(500)
        .send({ message: 'La edad no puede ser mayor a 100 años' });
    }

    const status = 5;
    const queryInsert = `INSERT INTO teachers (TeacherID, FirstName, LastName, NameSchool, LevelStudies, StudentsInCharge, CCT, SchoolZone, WorkShif, Curp, Email, Age, Phone, Country, Status)
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ${status});`;
    const queryParamsInsert = [
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
      workShif,
      curp,
      email,
      age,
      phone,
      country,
    ];
    await connectionQuery(queryInsert, queryParamsInsert);

    res.status(200).send({ message: 'Maestro creado con exito' });
  } catch (error) {
    res.status(500).send({ message: 'Error al crear el maestro', error });
  }
};

const ActualizarMaestro = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
      workShif,
      curp,
      email,
      age,
      phone,
      country,
      status,
      id,
    } = req.body;

    const queryUpdate = `UPDATE teachers SET FirstName = ? , LastName = ?, NameSchool = ?, LevelStudies = ? ,StudentsInCharge = ?, CCT = ?, SchoolZone = ?, WorkShif = ?, Curp = ? , Email = ? , Age = ? , Phone = ? , Country = ?, Status = ? WHERE TeacherID = ?`;
    const queryParamsUpdate = [
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
      workShif,
      curp,
      email,
      age,
      phone,
      country,
      status,
      id,
    ];
    await connectionQuery(queryUpdate, queryParamsUpdate);
    res.status(200).send({ message: 'Se actualizo el maestro' });
  } catch (error) {
    res.status(500).send({
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
        .send({ message: 'No se envio el ID o no es valido' });

    const queryParamsDelete = [id];
    const Status = 6;
    const queryDelete = `UPDATE teachers SET Status = ${Status} WHERE TeacherID = ?`;
    await connectionQuery(queryDelete, queryParamsDelete);

    res.status(200).send({
      message: 'Se mando a la boveda de eliminados o esta en la boveda',
    });
  } catch (error) {
    res.status(500).send({
      message: 'Hubo un error al mandar a la boveda de eliminados',
      error,
    });
  }
};

const EliminarMaestro = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res
        .status(400)
        .send({ message: 'No se envio el ID o no es valido' });

    if (id) {
      const queryValidate = `SELECT * FROM teachers WHERE TeacherID = ?`;
      const queryParamsValidate = [id];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length === 0) {
        return res.status(404).send({
          message: 'El maestro no existe',
        });
      }
    }

    const queryParamsDelete = [id];
    const queryDelete = `DELETE FROM teachers WHERE TeacherID = ?`;
    await connectionQuery(queryDelete, queryParamsDelete);
    res.status(200).send({
      message: 'Se elimino definitivamente el maestro',
    });
  } catch (error) {
    res.status(500).send({
      message: 'Hubo un error al eliminar el maestro',
      error,
    });
  }
};

module.exports = {
  ObtenerTodosLosMaestros,
  ObtenerLosUsuariosEliminados,
  BusquedaDeMaestro,
  InsertarMaestro,
  ActualizarMaestro,
  MoverABovedaEliminados,
  EliminarMaestro,
};
