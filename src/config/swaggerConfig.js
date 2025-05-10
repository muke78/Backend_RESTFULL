import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import swaggerJsdoc from "swagger-jsdoc";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import swaggerUi from "swagger-ui-express";

process.loadEnvFile();

// Obtener __dirname equivalente en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerDefinition = {
  openapi: "3.1.0",
  info: {
    title: "API Gestion y Administracion de una escuela",
    version: "1.0.0",
    description: "Documentación para la API de una escuela",
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
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
      description: "Servidor de desarrollo",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [resolve(__dirname, "../router/*.js")],
};

const swaggerDocument = swaggerJsdoc(options);

const setupSwagger = (app) => {
  const theme = new SwaggerTheme();
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
    }),
  );
};

export { swaggerDocument, setupSwagger };
