import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { createServer } from "node:http";

import { setupSwagger } from "./src/config/swaggerConfig.js";
import { corsOptions } from "./src/middleware/cors.middleware.js";
import { errorHandler } from "./src/middleware/error.middleware.js";
import {
	burstProtectionLimiter,
	normalLimiter,
} from "./src/middleware/rateLimitRequest.middleware.js";
import { router } from "./src/routes/index.js";
import { config } from "./src/config/config.js";

const app = express();

// Configuracion de Swagger
setupSwagger(app);

// ✅ 1. Middlewares básicos primero
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());

// ✅ 2. Ruta raíz
app.get("/", (_request, response) => {
	response.status(200).json({
		description: "CRM para Gestión y Administración de una escuela",
		name: "CRM Kinder Garden Backend",
		version: "1.0.0",
		author: {
			name: "Erick Gonzalez",
			github: "https://github.com/muke78",
		},
		api: "/api/v1",
		status: "🟢 API funcionando correctamente",
		documentation: `${config.docs.baseUrl}`,
	});
});

// ✅ 3. Rutas de la API (ya con rate limiting aplicado)
app.use(burstProtectionLimiter, normalLimiter, router);

// ✅ 4. Middleware de errores
app.use(errorHandler);

// Crear y arrancar el servidor
let currentPort = config.port;
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
		`🟢 API funcionando correctamente, servidor corriendo en el puerto http://localhost:${server.address().port}`,
	);
});
