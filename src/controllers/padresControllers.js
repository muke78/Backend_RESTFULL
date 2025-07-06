import { connectionQuery } from "../helpers/connection.helpers.js";
import {
  methodConflicts,
  methodCreated,
  methodError,
  methodIncorrect,
  methodNotFound,
  methodOK,
} from "../server/serverMethods.js";

const ObtenerTodosLosPapas = async (req, res) => {
  try {
    const [result] = await connectionQuery("CALL ObtenerPadresActivos()");

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ObtenerPadresEliminados = async (req, res) => {
  try {
    const obtenerPadresDelete = `SELECT * FROM parents WHERE Status = "Inactivo" ORDER BY LastName ASC;`;
    const result = await connectionQuery(obtenerPadresDelete);

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const ObtenerPadresPorMaestro = async (req, res) => {
  try {
    const { id } = req.params;

    const verifyTeacher = `SELECT * FROM parents WHERE TeacherID = ?;`;
    const resultVerify = await connectionQuery(verifyTeacher, [id]);

    if (resultVerify.length === 0) return methodNotFound(req, res);

    const [result] = await connectionQuery(`CALL ObtenerPadresPorMaestro(?)`, [
      id,
    ]);

    if (result.length === 0)
      return methodNotFound(req, res, {
        message:
          "No se encontraron padres que se relacionen con el maestro o estan en la boveda",
      });

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

const BusquedaDePadres = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    let querySearch = `SELECT * FROM parents WHERE 1=1`;
    const queryParams = [];

    if (email) {
      querySearch += " AND email LIKE ?";
      queryParams.push(`%${email}%`);
    }

    if (firstName) {
      querySearch += " AND FirstName LIKE ?";
      queryParams.push(`%${firstName}%`);
    }

    if (lastName) {
      querySearch += " AND LastName LIKE ?";
      queryParams.push(`%${lastName}%`);
    }

    const resultSearch = await connectionQuery(querySearch, queryParams);

    if (resultSearch.length === 0) return methodNotFound(req, res);

    methodOK(req, res, resultSearch);
  } catch (error) {
    methodError(req, res, error);
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
    )
      return methodIncorrect(req, res);

    if (email && email.trim()) {
      const queryValidate = `SELECT * FROM parents WHERE Email = ?`;
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
              "El correo existe pero la mamá o el papá está eliminado, eliminelo definitivamente o editelo",
          });
        }
      }
    }

    if (age >= 100)
      return methodIncorrect(req, res, {
        message: "La edad no puede ser mayor a 100 años",
      });

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

    const result = await connectionQuery(queryInsert, queryParamsInsert);

    if (result.affectedRows > 0)
      return methodCreated(req, res, queryParamsInsert);
  } catch (error) {
    methodError(req, res, error);
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

    const queryDelete = `UPDATE parents SET Status = 'Inactivo' WHERE ID = ?`;
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

const EliminarPadre = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return methodIncorrect(req, res);

    const queryValidate = `SELECT * FROM parents WHERE ID = ?`;
    const queryParamsValidate = [id];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate,
    );

    if (resultValidate.length === 0) return methodNotFound(req, res);

    const queryDeleteTeacher = `DELETE FROM parents WHERE ID = ?`;
    const result = await connectionQuery(queryDeleteTeacher, [id]);

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
  ObtenerTodosLosPapas,
  ObtenerPadresEliminados,
  ObtenerPadresPorMaestro,
  BusquedaDePadres,
  InsertarPadres,
  EditarPadres,
  MoverABovedaEliminados,
  EliminarPadre,
};
