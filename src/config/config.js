import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV,
  db: {
    host: process.env.DB_HOST || localhost,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    runtime: process.env.RUNTIME,
    connectTimeout: 30000,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.EXP_TOKEN || "12h",
  },
  docs: {
    urlDocs: process.env.ENDPOINT_SWAGGER,
    baseUrl: process.env.BASE_URL,
  },
  authGoogle: {
    client: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
    client_google: process.env.CLIENT_ID_GOOGLE,
  },
};
