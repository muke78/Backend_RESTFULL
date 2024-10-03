const jwt = require('../helpers/jwt');
const { connectionQuery } = require('../helpers/connection.helper');
const { lastLogin } = require('../helpers/userLastLogin');
const { insertTeacherBeforeUser } = require('../helpers/insertTeacherWithUser');
const hashedArg = require('argon2');

const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    const obtenerUsuarios = `SELECT * FROM users ORDER BY NameUser ASC;`;
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
    const { nameUser, email, password, role } = req.body;

    if (!nameUser || !email || !password || !role)
      return res.status(400).send({ message: 'Los campos son requeridos' });

    const queryValidate = `SELECT * FROM users WHERE Email = ?`;
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

    const hashedPasword = await hashedArg.hash(password);
    const queryInsert = `INSERT INTO users (ID, NameUser, Email, Password, Role, LastLogin) VALUES (UUID(), ?, ?, '${hashedPasword}', ?, NULL)`;
    const queryParamsInsert = [nameUser, email, role];
    await connectionQuery(queryInsert, queryParamsInsert);

    await insertTeacherBeforeUser(email);
    await res
      .status(200)
      .send({ message: 'Usuario creado exitosamente y maestro' });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Error al crear el usuario y su maestro', error });
  }
};

const EditarUsuario = async (req, res) => {
  try {
    const { nameUser, email, password, role, accountStatus, id } = req.body;

    if (id) {
      const queryValidateUpdate = `SELECT * FROM users WHERE ID = ?`;
      const queryParamsValidUpdate = [id];
      const resultValidUpdate = await connectionQuery(
        queryValidateUpdate,
        queryParamsValidUpdate
      );

      if (resultValidUpdate.length === 0) {
        return res.status(400).send({
          message: 'No se proporciono un id valido o el usuario no existe',
        });
      }
    }

    const hashedPasswordUpdate = await hashedArg.hash(password);
    const queryUpdate = `UPDATE users SET NameUser = ?, Email = ?, Password = '${hashedPasswordUpdate}', Role = ?, AccountStatus = ?  WHERE ID = ?`;
    const queryParamsUpdate = [nameUser, email, role, accountStatus, id];

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
      const queryValidate = `SELECT * FROM users WHERE id = ?`;
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
    const queryDelete = `DELETE FROM users WHERE id = ?`;
    await connectionQuery(queryDelete, queryParamsDelete);

    res.status(200).send({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).send({
      message: 'Hubo un error al eliminar el usuario',
      error,
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;
    if (!email)
      return res
        .status(400)
        .send({ message: 'El correo electrónico es requerido' });

    if (!regex.test(email))
      return res
        .status(400)
        .send({ message: 'El correo electrónico no es válido' });

    if (!password)
      return res.status(400).send({ message: 'La contraseña es requerida' });

    const queryValidate = `SELECT * FROM users WHERE Email = ?`;
    const queryParamsValidate = [email];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate
    );

    if (resultValidate.length === 0) {
      return res
        .status(400)
        .send({ message: 'El usuario no se encuentra registrado' });
    }

    const user = resultValidate[0];

    const argonVerify = await hashedArg.verify(user.Password, password);

    if (!argonVerify)
      return res
        .status(400)
        .send({ message: 'La contraseña es incorrecta o está mal escrita' });

    if (user.AccountStatus === 'Inactivo')
      return res.status(400).send({
        message:
          'El usuario está inactivo, pida la reactivación a un administrador',
      });

    // Crea el token
    const token = jwt.createToken({
      id: user.ID,
      nameUser: user.NameUser,
      email: user.Email,
      role: user.Role,
      lastLogin: user.LastLogin,
      accountStatus: user.AccountStatus,
    });

    await lastLogin(user.ID);

    return res.status(200).send({ token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  ObtenerTodosLosUsuarios,
  InsertarUsario,
  EditarUsuario,
  EliminarUsuario,
  Login,
};
