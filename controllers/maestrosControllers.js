const { connectionQuery } = require('../helpers/connection.helper');

const ObtenerTodosLosMaestros = async (req, res) => {
  try {
    const obtenerUser = `SELECT * FROM maestros ORDER BY LastName ASC;`;
    const result = await connectionQuery(obtenerUser);

    if (result.length === 0)
      return res.status(404).json({ message: 'No se encontraron maestros' });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const BusquedaDeMaestro = async (req, res) => {
  try {
    const { id, email, nameUser, firstName } = req.body;
    let querySearch = `SELECT * FROM maestros WHERE TeacherID = ?`;

    if (email || nameUser || firstName) {
      querySearch += ' OR Email = ? OR NameUser = ? OR FirstName = ?;';
    }

    const queryParamsSearch = [id, email, nameUser, firstName];
    const resultSearch = await connectionQuery(querySearch, queryParamsSearch);

    if (resultSearch.length === 0)
      return res.status(404).json({ message: 'Maestro no encontrado' });

    res.status(200).send(resultSearch[0]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const InsertarMaestro = async (req, res) => {
  try {
    const {
      nameUser,
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
      curp,
      email,
      age,
      phone,
      country,
    } = req.body;

    if (
      !nameUser ||
      !firstName ||
      !lastName ||
      !nameSchool ||
      !levelStudies ||
      !studentsInCharge ||
      !cct ||
      !schoolZone ||
      !curp ||
      !email ||
      !age ||
      !phone ||
      !country
    )
      return res.status(400).send({ message: 'Los campos son requeridos' });
    if (email && email.trim()) {
      const queryValidate = `SELECT * FROM maestros WHERE Email = ?`;
      const queryParamsValidate = [email];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length > 0) {
        return res.status(500).send({
          message: 'El correo ya se encuentra registrado',
          resultValidate,
        });
      }
    }

    if (age > 100) {
      return res
        .status(500)
        .send({ message: 'La edad no puede ser mayor a 100 años' });
    }

    const status = 5;
    const queryInsert = `INSERT INTO maestros (TeacherID, NameUser, FirstName, LastName, NameSchool, LevelStudies, StudentsInCharge, CCT, SchoolZone, Curp, Email, Age, Phone, Country, Status)
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ${status});`;
    const queryParamsInsert = [
      nameUser,
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
      curp,
      email,
      age,
      phone,
      country,
    ];
    await connectionQuery(queryInsert, queryParamsInsert);

    res.status(200).send({ message: 'Usuario creado con exito' });
  } catch (error) {
    res.status(500).send({ message: 'Error al crear el usuario', error });
  }
};

const ActualizarMaestro = async (req, res) => {
  try {
    const {
      nameUser,
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
      curp,
      email,
      age,
      phone,
      country,
      status,
      id,
    } = req.body;

    const queryUpdate = `UPDATE maestros SET NameUser = ?, FirstName = ? , LastName = ?, NameSchool = ?, LevelStudies = ? ,StudentsInCharge = ?, CCT = ?, SchoolZone = ?, Curp = ? , Email = ? , Age = ? , Phone = ? , Country = ?, Status = ? WHERE TeacherID = ?`;
    const queryParamsUpdate = [
      nameUser,
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      cct,
      schoolZone,
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

const EliminarMaestro = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res
        .status(400)
        .send({ message: 'No se envio el ID o no es valido' });

    if (id) {
      const queryValidate = `SELECT * FROM maestros WHERE TeacherID = ?`;
      const queryParamsValidate = [id];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length === 0) {
        return res.status(404).send({
          message: 'El maestro no existe',
          resultValidate,
        });
      }
    }

    const queryParamsDelete = [id];
    const queryDelete = `DELETE FROM maestros WHERE TeacherID = ?`;
    await connectionQuery(queryDelete, queryParamsDelete);

    res.status(200).send({
      message: 'Se elimino correctamente el maestro',
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
  BusquedaDeMaestro,
  InsertarMaestro,
  ActualizarMaestro,
  EliminarMaestro,
};
