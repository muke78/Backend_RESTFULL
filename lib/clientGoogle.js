import { OAuth2Client } from "google-auth-library";

process.loadEnvFile();

const CLIENT_ID = process.env.CLIENT_ID_GOOGLE;

if (!CLIENT_ID) {
  console.error("FATAL ERROR: GOOGLE_CLIENT_ID is not defined.");
  process.exit(1);
}

// Instanciar el cliente de OAuth de Google
export const googleClient = new OAuth2Client(CLIENT_ID);
