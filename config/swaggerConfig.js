require('dotenv').config({ path: '.env' });
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.1.0',
  info: {
    title: 'API Gestion y Administracion de una escuela',
    version: '1.0.0',
    description: 'Documentación para la API de una escuela',
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
  servers: [
    {
      url: `${process.env.ENDPOINT_SWAGGER}`,
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, '../router/*.js')],
};

const swaggerDocument = swaggerJsdoc(options);

module.exports = swaggerDocument;
