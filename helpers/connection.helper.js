import { pool } from "../config/config.js";

const connectionQuery = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        console.error("Error en la consulta a la base de datos");
        return reject(error);
      }
      resolve(results);
    });
  });
};

export { connectionQuery };
