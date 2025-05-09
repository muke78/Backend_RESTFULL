import { connectionQuery } from "../../../helpers/connection.helper.js";
import {
  methodError,
  methodIncorrect,
  methodOK,
} from "../../../server/serverMethods.js";

export const BusquedaDeUsuarios = async (req, res) => {
  try {
    const { email } = req.params;
    let querySearchUsers = `SELECT * FROM users WHERE 1=1`;
    const queryParamsSearch = [];

    if (email) {
      querySearchUsers += ` AND Email LIKE ?`;
      queryParamsSearch.push(`%${email}%`);
    } else {
      return methodIncorrect(req, res);
    }

    const resultSearch = await connectionQuery(
      querySearchUsers,
      queryParamsSearch,
    );

    if (resultSearch.length === 0) {
      return methodIncorrect(req, res, `No se encontro el correo ${email}`);
    }

    methodOK(req, res, resultSearch);
  } catch (error) {
    methodError(req, res, error);
  }
};
