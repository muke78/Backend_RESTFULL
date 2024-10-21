process.loadEnvFile();
const mysql = require('mysql2');

// Configuracion de la conexion a la base de datos
const dbConnection = {
  host: process.env.DB_HOST_ESCRITURA,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectTimeout: 30000,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConnection);

pool.on('connection', (connection) => {
  console.log('Conexion exitosa a la basde de datos');
  connection.query('SET SESSION wait_timeout = 28800');
});

pool.on('error', (err) => {
  console.error('Error a la conexion de la base de datos', err);
});

module.exports = {
  pool,
};
