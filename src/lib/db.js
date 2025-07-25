import mysql from "mysql2";

import { config } from "../config/config.js";

// Configuracion de la conexion a la base de datos
export const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  connectTimeout: config.db.connectTimeout,
  waitForConnections: config.db.waitForConnections,
  connectionLimit: config.db.connectionLimit,
  queueLimit: config.db.queueLimit,
});

pool.on("connection", (connection) => {
  console.log("Conexion exitosa a la basde de datos");
  connection.query("SET SESSION wait_timeout = 28800");
});

pool.on("error", (err) => {
  console.error("Error a la conexion de la base de datos", err);
});
