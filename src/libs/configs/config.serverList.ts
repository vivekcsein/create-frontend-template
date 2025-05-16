import { envBackendAPI, envConfig, envFrontendHost } from "./config.env";

export const whiteListedServer = [
    "http:localhost:3000",
    "http:127.0.0.1:3000",
    "http://localhost:7164/",
    "http://127.0.0.1:7164/",
];

export const blackListedIPs = [];

export const allowedOrigins = [
    `http://${envBackendAPI.APP_BACKEND}`,
    `http://${envFrontendHost.APP_FRONTEND}`,
    `http://localhost:${envConfig.APP_PORT}`,
];
