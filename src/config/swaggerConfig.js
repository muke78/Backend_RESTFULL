import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import swaggerJsdoc from "swagger-jsdoc";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { config } from "../config/config.js";

// Obtener __dirname equivalente en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerDefinition = {
  openapi: "3.0.0",
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
      url: `${config.docs.urlDocs}`,
      description: "Servidor de desarrollo",
    },
  ],
};

const swaggerDocument = YAML.load(resolve(__dirname, "../docs/index.yaml"));

export const setupSwagger = (app) => {
  const theme = new SwaggerTheme();
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
    }),
  );
};
