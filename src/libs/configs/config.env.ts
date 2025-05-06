import { config } from "dotenv";
config();

const _envConfig = {
  APP_NAME: process.env.APP_NAME || "Create-Frontend-Template",
  APP_VERSION: process.env.APP_VERSION || "1.0.0",
  APP_PORT: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
  APP_HOST: process.env.APP_HOST || "localhost",
  APP_ENV: process.env.APP_ENV || "development",
};

const _googleConfig = {
  GOOGLE_VERIFICATION:
    process.env.GOOGLE_VERIFICATION || "google-verification-code",
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "google-client-id",
};

const _envAPI_LAYOUT_API = {
  rootLayoutAPI: process.env.ROOT_LAYOUT_API || "http://127.0.0.1:3000/api/rootLayout" as string,
}

export const envConfig = Object.freeze(_envConfig);
export const googleConfig = Object.freeze(_googleConfig);
export const envAPI_LAYOUT_API = Object.freeze(_envAPI_LAYOUT_API);
