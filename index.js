const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swaggerConfig');

// Routers
const MaestrosRouter = require('./router/maestrosRouter');
const UsuariosRouter = require('./router/usuariosRouter');

const app = express();

// Configurar Swagger UI
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl:
      'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-material.css',
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/v1', MaestrosRouter, UsuariosRouter);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Configuración de seguridad de cabeceras HTTP
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

const server = http.createServer(app);

// Iniciar el servidor
server.listen(3000, () => {
  console.log('El servidor esta escuhando en el puerto 3000');
});
