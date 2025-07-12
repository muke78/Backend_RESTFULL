import { OAuth2Client } from "google-auth-library";

import { config } from "../config/config.js";

if (!config.authGoogle.client_google) {
  console.error("FATAL ERROR: GOOGLE_CLIENT_ID is not defined.");
  process.exit(1);
}

// Instanciar el cliente de OAuth de Google
export const googleClient = new OAuth2Client(config.authGoogle.client_google);
