import dotenv from "dotenv";
import inquirer from "inquirer";
import mysql from "mysql2";

import { loadChalk } from "../middleware/loadChalk.js";

dotenv.config();

export async function selectDatabaseConnection() {
  const chalk = await loadChalk();
  const { envChoice } = await inquirer.prompt([
    {
      type: "list",
      name: "envChoice",
      message: "¿Qué base de datos deseas usar?",
      choices: [
        { name: "🔧 Local", value: "local" },
        { name: "🚀 Producción", value: "prod" },
      ],
    },
  ]);

  console.log(
    chalk.green(
      `✔  Conectando a la base de datos ${envChoice === "prod" ? "de Producción" : "Local"}...\n`,
    ),
  );

  const dbConfig = {
    local: {
      host: process.env.DB_HOST_LOCAL,
      user: process.env.DB_USER_LOCAL,
      password: process.env.DB_PASS_LOCAL,
      database: process.env.DB_NAME_LOCAL,
    },
    prod: {
      host: process.env.DB_HOST_PROD,
      user: process.env.DB_USER_PROD,
      password: process.env.DB_PASS_PROD,
      database: process.env.DB_NAME_PROD,
    },
  };

  const selectedConfig = {
    ...dbConfig[envChoice],
    connectTimeout: 30000,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
  };

  const pool = mysql.createPool(selectedConfig);

  pool.on("connection", (connection) => {
    console.log(chalk.cyan("✅ Conexión establecida con la base de datos"));
    connection.query("SET SESSION wait_timeout = 28800");
  });

  pool.on("error", (err) => {
    console.error(
      chalk.red("❌ Error en la conexión a la base de datos:"),
      err,
    );
  });

  return pool;
}
