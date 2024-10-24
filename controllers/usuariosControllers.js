import { createToken } from '../helpers/jwt.js';
import { connectionQuery } from '../helpers/connection.helper.js';
import { lastLogin } from '../helpers/userLastLogin.js';
import { insertTeacherBeforeUser } from '../helpers/insertTeacherWithUser.js';
import { deleteTeacherByUser } from '../helpers/deleteTeacherByUser.js';
import hashedArg from 'argon2';

const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    const obtenerUsuarios = `SELECT * FROM users ORDER BY NameUser ASC;`;
    const result = await connectionQuery(obtenerUsuarios);

    if (result.length === 0)
      return res.status(404).json({ message: 'No se encontraron usuarios' });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const InsertarUsario = async (req, res) => {
  try {
    const { nameUser, email, password, role } = req.body;

    if (!nameUser || !email || !password || !role)
      return res.status(400).json({ message: 'Los campos son requeridos' });

    const queryValidate = `SELECT * FROM users WHERE Email = ?`;
    const queryParamsValidate = [email];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate
    );

    if (resultValidate.length > 0) {
      return res.status(500).json({
        message: 'El correo ya se encuentra registrado',
      });
    }

    const hashedPasword = await hashedArg.hash(password);
    const queryInsert = `INSERT INTO users (ID, NameUser, Email, Password, Role, LastLogin) VALUES (UUID(), ?, ?, ?, ?, NULL)`;
    const queryParamsInsert = [nameUser, email, hashedPasword, role];
    await connectionQuery(queryInsert, queryParamsInsert);

    await insertTeacherBeforeUser(email);
    await res
      .status(201)
      .json({ message: 'Usuario creado exitosamente y maestro' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al crear el usuario y su maestro', error });
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
        return res.status(404).json({
          message: 'No se proporciono un id valido o el usuario no existe',
        });
      }
    }

    // if (email) {
    //   const queryValidateEmailUpdate = `SELECT * FROM users WHERE Email = ?`;
    //   const queryParamsEmailUpdate = [email];
    //   const resulQueryEmailValidate = await connectionQuery(
    //     queryValidateEmailUpdate,
    //     queryParamsEmailUpdate
    //   );
    //   if (resulQueryEmailValidate.length > 0)
    //     return res.status(409).json({
    //       message: 'Usuario ya existe y el correo esta siendo utilizado',
    //     });
    // }

    const hashedPasswordUpdate = await hashedArg.hash(password);
    const queryUpdate = `UPDATE users SET NameUser = ?, Email = ?, Password = '${hashedPasswordUpdate}', Role = ?, AccountStatus = ?  WHERE ID = ?`;
    const queryParamsUpdate = [nameUser, email, role, accountStatus, id];

    await connectionQuery(queryUpdate, queryParamsUpdate);
    res.status(200).json({ message: 'El usuario se actualizo con exito' });
  } catch (error) {
    res.status(500).json({
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
        .json({ message: 'No se envio el ID o no es valido' });

    if (id) {
      const queryValidate = `SELECT * FROM users WHERE id = ?`;
      const queryParamsValidate = [id];
      const resultValidate = await connectionQuery(
        queryValidate,
        queryParamsValidate
      );

      if (resultValidate.length === 0) {
        return res.status(400).json({
          message: 'El usuario no existe',
        });
      }
    }
    const queryDelete = `DELETE FROM users WHERE id = ?`;
    await connectionQuery(queryDelete, [id]);

    await deleteTeacherByUser(id);

    res
      .status(200)
      .json({ message: 'Usuario eliminado exitosamente y el maestro' });
  } catch (error) {
    res.status(500).json({
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
        .json({ message: 'El correo electrónico es requerido' });

    if (!regex.test(email))
      return res
        .status(400)
        .json({ message: 'El correo electrónico no es válido' });

    if (!password)
      return res.status(400).json({ message: 'La contraseña es requerida' });

    const queryValidate = `SELECT * FROM users WHERE Email = ?`;
    const queryParamsValidate = [email];
    const resultValidate = await connectionQuery(
      queryValidate,
      queryParamsValidate
    );

    if (resultValidate.length === 0) {
      return res
        .status(404)
        .json({ message: 'El usuario no se encuentra registrado' });
    }

    const user = resultValidate[0];

    const argonVerify = await hashedArg.verify(user.Password, password);

    if (!argonVerify)
      return res
        .status(500)
        .json({ message: 'La contraseña es incorrecta o está mal escrita' });

    if (user.AccountStatus === 'Inactivo')
      return res.status(403).json({
        message:
          'El usuario está inactivo, pida la reactivación a un administrador',
      });

    // Crea el token
    const token = createToken({
      id: user.ID,
      nameUser: user.NameUser,
      email: user.Email,
      role: user.Role,
      lastLogin: user.LastLogin,
      accountStatus: user.AccountStatus,
    });

    await lastLogin(user.ID);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  ObtenerTodosLosUsuarios,
  InsertarUsario,
  EditarUsuario,
  EliminarUsuario,
  Login,
};
