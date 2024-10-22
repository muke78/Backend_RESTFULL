import express from 'express';
import { createServer } from 'node:http';
import { setupSwagger } from './config/swaggerConfig.js';
import { corsMiddleware } from './middleware/cors.js';
import { securityHeadersMiddleware } from './middleware/securityHeaders.js';
import { router } from './router/index.js';

const app = express();

// Configuracion de Swagger
setupSwagger(app);

// Middleware
app.use(corsMiddleware);
app.use(securityHeadersMiddleware);
app.use(router);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Crear y arrancar el servidor
const server = createServer(app);
server.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});
