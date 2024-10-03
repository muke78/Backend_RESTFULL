const { connectionQuery } = require('../helpers/connection.helper');
const {
  deleteUserByTeacherID,
} = require('../helpers/teachersEliminatedStatus');

const ObtenerTodosLosMaestros = async (req, res) => {
  try {
    const obtenerUser = `SELECT * FROM teachers WHERE Status = "Activo" ORDER BY LastName ASC;`;
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
    const obtenerUserDelete = `SELECT * FROM teachers WHERE Status = "Inactivo" ORDER BY LastName ASC;`;
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
    const { email, firstName, lastName } = req.body;
    let querySearch = `SELECT * FROM teachers WHERE 1=1`;
    const queryParamsSearch = [];

    if (email) {
      querySearch += ' AND email LIKE ?';
      queryParamsSearch.push(`%${email}%`);
    }

    if (firstName) {
      querySearch += ' AND FirstName LIKE ?';
      queryParamsSearch.push(`%${firstName}%`);
    }

    if (lastName) {
      querySearch += ' AND LastName LIKE ?';
      queryParamsSearch.push(`%${lastName}%`);
    }

    const resultSearch = await connectionQuery(querySearch, queryParamsSearch);

    if (resultSearch.length === 0) {
      return res
        .status(404)
        .json({ message: 'Maestro no encontrado, intente buscar con otro' });
    }

    res.status(200).send(resultSearch);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const InsertarMaestro = async (req, res) => {
  try {
    const {
      teacherID,
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      grade,
      group,
      cct,
      schoolZone,
      workShift,
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
      !nameSchool ||
      !levelStudies ||
      !studentsInCharge ||
      !grade ||
      !group ||
      !cct ||
      !schoolZone ||
      !workShift ||
      !curp ||
      !email ||
      !phone ||
      !age ||
      !address ||
      !emergencyContact ||
      !emergencyPhone
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

        if (Status === 'Activo') {
          return res.status(500).send({
            message: 'El correo ya se encuentra registrado',
          });
        } else if (Status === 'Inactivo') {
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

    const queryInsert = `INSERT INTO teachers(ID, TeacherID, FirstName, LastName, NameSchool, LevelStudies, StudentsInCharge, Grade, \`Group\`, CCT, SchoolZone, WorkShift, Curp, Email, Phone, Age, Address, EmergencyContact, EmergencyPhone) 
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?)`;

    const queryParamsInsert = [
      teacherID,
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      grade,
      group,
      cct,
      schoolZone,
      workShift,
      curp,
      email,
      phone,
      age,
      address,
      emergencyContact,
      emergencyPhone,
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
      grade,
      group,
      cct,
      schoolZone,
      workShift,
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

    const queryUpdate = `UPDATE teachers SET FirstName = ? , LastName = ?, NameSchool = ?, LevelStudies = ? , StudentsInCharge = ?, Grade = ?, \`Group\` = ?, CCT = ?, SchoolZone = ?, WorkShift = ?, 
    Curp = ? , Email = ? , Phone = ?, Age = ?, Address = ?, EmergencyContact = ?, EmergencyPhone = ?, Status = ? WHERE ID = ?`;
    const queryParamsUpdate = [
      firstName,
      lastName,
      nameSchool,
      levelStudies,
      studentsInCharge,
      grade,
      group,
      cct,
      schoolZone,
      workShift,
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
    console.log(id);

    if (!id)
      return res
        .status(400)
        .send({ message: 'No se envio el ID o no es valido' });

    const queryDelete = `UPDATE teachers SET Status = 'Inactivo' WHERE ID = ?`;
    const queryParamsDelete = [id];
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

    if (!id) {
      return res
        .status(400)
        .send({ message: 'No se envió el ID o no es válido' });
    }

    const queryValidate = `SELECT TeacherID FROM teachers WHERE ID = ?`;
    const queryParamsValidate = [id];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate
    );

    if (resultValidate.length === 0) {
      return res.status(404).send({ message: 'El maestro no existe' });
    }

    const { TeacherID } = resultValidate[0];

    const queryDeleteTeacher = `DELETE FROM teachers WHERE ID = ?`;
    await connectionQuery(queryDeleteTeacher, [id]);

    await deleteUserByTeacherID(TeacherID);

    res.status(200).send({
      message: 'Se eliminó definitivamente el maestro y su usuario asociado',
    });
  } catch (error) {
    res.status(500).send({
      message: 'Hubo un error al eliminar el maestro y su usuario',
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
