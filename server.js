import { Command } from "commander";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { createServer } from "node:http";

import { setupSwagger } from "./src/config/swaggerConfig.js";
import { corsOptions } from "./src/middleware/cors.js";
import { router } from "./src/router/index.js";

const program = new Command();
// Configuración básica del programa
program
  .name("backend-kinder-garden")
  .description("CRM para el control escolar")
  .version("1.0.0");

// Parsear los argumentos de la línea de comandos
program.parse(process.argv);

const app = express();

// Configuracion de Swagger
setupSwagger(app);

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));
app.use(helmet());
app.use(router);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("Error interno del servidor");
});

// Crear y arrancar el servidor
const PORT = 3000;
const server = createServer(app);
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
    server.listen(PORT + 1);
  } else {
    console.error("Serve error:", error);
  }
});

server.listen(PORT, () => {
  console.log(
    `🟢 Server is listening on port localhost:${server.address().port}`,
  );
});
