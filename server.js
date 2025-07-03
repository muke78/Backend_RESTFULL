import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { createServer } from "node:http";

import { setupSwagger } from "./src/config/swaggerConfig.js";
import { corsOptions } from "./src/middleware/cors.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import { router } from "./src/router/index.js";

// Datos del proyecto
const projectInfo = {
  name: "CRM Kinder Garden",
  description: "CRM para Gestión y Administración de una escuela",
  version: "1.0.0",
  authorName: "Erick Gonzalez",
  githubName: "https://github.com/muke78",
};

const app = express();

// Configuracion de Swagger
setupSwagger(app);

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));
app.use(helmet());

// ✅ Ruta raíz: información del proyecto
app.get("/", (request, response) => {
  response.status(200).json({
    description: projectInfo.description,
    name: projectInfo.name,
    version: projectInfo.version,
    author: {
      name: projectInfo.authorName,
      github: projectInfo.githubName,
    },
    api: "/api/v1",
    status: "🟢 API funcionando correctamente",
  });
});

app.use(router);

// ✅ Middleware global de errores profesional
app.use(errorHandler);

// Crear y arrancar el servidor
let currentPort = 3000;
const server = createServer(app);

const tryListen = (port) => {
  server.listen(port);
};

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log(
      `⚠️ El puerto ${currentPort} está en uso. Intentando con el puerto ${currentPort + 1}...`,
    );
    currentPort++;
    tryListen(currentPort);
  } else {
    console.error("Error del servidor:", error);
  }
});

server.listen(currentPort, () => {
  console.log(
    `🟢 Server is listening on port localhost:${server.address().port}`,
  );
});
