const { connectionQuery } = require('../helpers/connection.helper');
const hashedArg = require('argon2');

const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    const obtenerUsuarios = `SELECT * FROM usuarios ORDER BY NameUser ASC;`;
    const result = await connectionQuery(obtenerUsuarios);

    if (result.length === 0)
      return res.status(404).send({ message: 'No se encontraron usuarios' });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const InsertarUsario = async (req, res) => {
  try {
    const { nameUser, email, password } = req.body;

    if (!nameUser || !email || !password)
      return res.status(400).send({ message: 'Los campos son requeridos' });

    if (email && email.trim()) {
      const queryValidate = `SELECT * FROM usuarios WHERE Email = ?`;
      const queryParamsValidate = [email];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length > 0) {
        return res.status(500).send({
          message: 'El correo ya se encuentra registrado',
        });
      }
    }

    const hashedPasword = await hashedArg.hash(password);
    const queryInsert = `INSERT INTO usuarios (id, NameUser, Email, Password) VALUES (UUID(), ?, ?, '${hashedPasword}')`;
    const queryParamsInsert = [nameUser, email, password];
    await connectionQuery(queryInsert, queryParamsInsert);

    res.status(200).send({ message: 'Usuario creado con exito' });
  } catch (error) {
    res.status(500).send({ message: 'Error al crear el usuario', error });
  }
};

const EditarUsuario = async (req, res) => {
  try {
    const { nameUser, email, password, id } = req.body;

    const hashedPasswordUpdate = await hashedArg.hash(password);
    const queryUpdate = `UPDATE usuarios SET NameUser = ?, Email = ?, Password = '${hashedPasswordUpdate}' WHERE id = ?`;
    const queryParamsUpdate = [nameUser, email, id];

    await connectionQuery(queryUpdate, queryParamsUpdate);
    res.status(200).send({ message: 'El usuario se actualizo con exito' });
  } catch (error) {
    res.status(500).send({
      message: 'Hubo un error en la actualizacion del usuario',
      error,
    });
  }
};

const EliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res
        .status(400)
        .send({ message: 'No se envio el ID o no es valido' });

    if (id) {
      const queryValidate = `SELECT * FROM usuarios WHERE id = ?`;
      const queryParamsValidate = [id];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length === 0) {
        return res.status(404).send({
          message: 'El usuario no existe',
        });
      }
    }

    const queryParamsDelete = [id];
    const queryDelete = `DELETE FROM usuarios WHERE id = ?`;
    await connectionQuery(queryDelete, queryParamsDelete);

    res.status(200).send({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).send({
      message: 'Hubo un error al eliminar el usuario',
      error,
    });
  }
};

const login = (req, res) => {};

module.exports = {
  ObtenerTodosLosUsuarios,
  InsertarUsario,
  EditarUsuario,
  EliminarUsuario,
};
