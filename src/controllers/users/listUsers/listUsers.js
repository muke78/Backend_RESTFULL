import { connectionQuery } from "../../../helpers/connection.helper.js";
import {
  methodError,
  methodNotFound,
  methodOK,
} from "../../../server/serverMethods.js";

export const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    const { status } = req.params;
    const { correo, rol } = req.query;

    let query = `SELECT * FROM users WHERE 1=1`;
    const params = [];

    if (status && status !== "All") {
      query += ` AND AccountStatus = ?`;
      params.push(status);
    }

    if (correo && correo !== "All") {
      query += ` AND AccountType = ?`;
      params.push(correo);
    }

    if (rol && rol !== "All") {
      query += ` AND Role = ?`;
      params.push(rol);
    }

    query += ` ORDER BY NameUser ASC`;

    const result = await connectionQuery(query, params);

    if (result.length === 0) return methodNotFound(req, res);

    methodOK(req, res, result);
  } catch (error) {
    methodError(req, res, error);
  }
};

// const ObtenerTodosLosUsuarios = async (req, res) => {
//   try {
//     // Tomar parámetros de paginación
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 7;
//     const offset = (page - 1) * limit;

//     // Consulta paginada
//     const obtenerUsuarios = `
//       SELECT * FROM users ORDER BY NameUser ASC LIMIT ? OFFSET ?;
//     `;
//     const totalUsuarios = `SELECT COUNT(*) AS total FROM users;`;

//     const [result, countResult] = await Promise.all([
//       connectionQuery(obtenerUsuarios, [limit, offset]),
//       connectionQuery(totalUsuarios),
//     ]);

//     const total = countResult[0].total;

//     if (result.length === 0) return methodNotFound(req, res);

//     // Puedes devolver los datos junto a un `metadata`
//     res.status(200).json({
//       success: true,
//       data: result,
//       message: "Consulta realizada correctamente",
//       metadata: {
//         currentPage: page,
//         pageSize: limit,
//         totalPages: Math.ceil(total / limit),
//         dataCount: total
//       },
//     });
//   } catch (error) {
//     methodError(req, res, error);
//   }
// };
