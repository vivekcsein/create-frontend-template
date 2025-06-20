import { config } from "dotenv";
config();

const _envConfig = {
  APP_NAME: process.env.APP_NAME || "Create-Frontend-Template",
  APP_VERSION: process.env.APP_VERSION || "1.0.0",
  APP_HOST: process.env.APP_HOST || "localhost",
  APP_PORT: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000,
  APP_ENV: process.env.APP_ENV || "development",
};

const _envBackendAPI = {
  APP_BACKEND: process.env.APP_BACKEND || "localhost:7164",
  APP_BACKEND_API_URL: process.env.APP_BACKEND_API_URL || "http://localhost:7164/api",
}

const _envFrontendHost = {
  APP_FRONTEND: process.env.APP_FRONTEND || "http://localhost:3000",
  APP_FRONTEND_API_URL: process.env.APP_FRONTEND_API_URL || "http://localhost:3000/api"
}

const _googleConfig = {
  GOOGLE_VERIFICATION:
    process.env.GOOGLE_VERIFICATION || "google-verification-code",
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "google-client-id",
};

const _envAPI_LAYOUT_API = {
  rootLayoutAPI: process.env.ROOT_LAYOUT_API || "http://127.0.0.1:3000/api/rootLayout" as string,
}

const _envGoogleClient = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
  GOOGLE_REDIRECT_URL: process.env.GOOGLE_REDIRECT_URL as string,
}
export const envConfig = Object.freeze(_envConfig);
export const envBackendAPI = Object.freeze(_envBackendAPI);
export const envFrontendHost = Object.freeze(_envFrontendHost);
export const googleConfig = Object.freeze(_googleConfig);
export const envAPI_LAYOUT_API = Object.freeze(_envAPI_LAYOUT_API);
export const envGoogleClient = Object.freeze(_envGoogleClient);
