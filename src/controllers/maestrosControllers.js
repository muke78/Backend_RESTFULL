import { connectionQuery } from "../helpers/connection.helpers.js";
// import { deleteUserByTeacherID } from "../helpers/teachersEliminatedStatus.js";
import {
  methodConflicts,
  methodCreated,
  methodError,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../server/serverMethods.js";

const ObtenerTodosLosMaestros = async (req, res) => {
  try {
    const obtenerUser = `SELECT * FROM teachers WHERE Status = "Activo" ORDER BY LastName ASC;`;
    const result = await connectionQuery(obtenerUser);

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ObtenerLosUsuariosEliminados = async (req, res) => {
  try {
    const obtenerUserDelete = `SELECT * FROM teachers WHERE Status = "Inactivo" ORDER BY LastName ASC;`;
    const result = await connectionQuery(obtenerUserDelete);

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const BusquedaDeMaestro = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    let querySearch = `SELECT * FROM teachers WHERE 1=1`;
    const queryParamsSearch = [];

    if (email) {
      querySearch += " AND email LIKE ?";
      queryParamsSearch.push(`%${email}%`);
    }

    if (firstName) {
      querySearch += " AND FirstName LIKE ?";
      queryParamsSearch.push(`%${firstName}%`);
    }

    if (lastName) {
      querySearch += " AND LastName LIKE ?";
      queryParamsSearch.push(`%${lastName}%`);
    }

    const resultSearch = await connectionQuery(querySearch, queryParamsSearch);

    if (resultSearch.length === 0) return methodNotFound(req, res);

    methodOK(req, res, resultSearch);
  } catch (error) {
    methodError(req, res, error);
  }
};

const InsertarMaestro = async (req, res) => {
  try {
    const {
      teacherID,
      firstName,
      lastName,
      dateOfBirth,
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
      !dateOfBirth ||
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
      return methodIncorrect(req, res);

    if (email && email.trim()) {
      const queryValidate = `SELECT * FROM teachers WHERE Email = ?`;
      const queryParamsValidate = [email];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate,
      );

      if (resultValidate.length > 0) {
        const { Status } = resultValidate[0];

        if (Status === "Activo") {
          return methodConflicts(req, res);
        } else if (Status === "Inactivo") {
          return methodError(req, res, {
            message:
              "El correo existe pero el maestro está eliminado, eliminelo definitivamente o editelo",
          });
        }
      }
    }

    if (age >= 100)
      return methodIncorrect(req, res, {
        message: "La edad no puede ser mayor a 100 años",
      });

    const queryInsert = `INSERT INTO teachers(ID, TeacherID, FirstName, LastName, DateOfBirth,  NameSchool, LevelStudies, StudentsInCharge, Grade, \`Group\`, CCT, SchoolZone, WorkShift, Curp, Email, Phone, Age, Address, EmergencyContact, EmergencyPhone) 
    VALUES (UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?)`;

    const queryParamsInsert = [
      teacherID,
      firstName,
      lastName,
      dateOfBirth,
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
    const result = await connectionQuery(queryInsert, queryParamsInsert);

    if (result.affectedRows > 0)
      return methodCreated(req, res, queryParamsInsert);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ActualizarMaestro = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
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

    const queryUpdate = `UPDATE teachers SET FirstName = ? , LastName = ?, DateOfBirth = ?, NameSchool = ?, LevelStudies = ? , StudentsInCharge = ?, Grade = ?, \`Group\` = ?, CCT = ?, SchoolZone = ?, WorkShift = ?, 
    Curp = ? , Email = ? , Phone = ?, Age = ?, Address = ?, EmergencyContact = ?, EmergencyPhone = ?, Status = ? WHERE ID = ?`;
    const queryParamsUpdate = [
      firstName,
      lastName,
      dateOfBirth,
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

    const queryDelete = `UPDATE teachers SET Status = 'Inactivo' WHERE ID = ?`;
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

const EliminarMaestro = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    const queryValidate = `SELECT TeacherID FROM teachers WHERE ID = ?`;
    const queryParamsValidate = [id];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate,
    );

    if (resultValidate.length === 0) return methodNotFound(req, res);

    // const { TeacherID } = resultValidate[0];

    const queryDeleteTeacher = `DELETE FROM teachers WHERE ID = ?`;
    const result = await connectionQuery(queryDeleteTeacher, [id]);

    // await deleteUserByTeacherID(TeacherID);

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
  ObtenerTodosLosMaestros,
  ObtenerLosUsuariosEliminados,
  BusquedaDeMaestro,
  InsertarMaestro,
  ActualizarMaestro,
  MoverABovedaEliminados,
  EliminarMaestro,
};
