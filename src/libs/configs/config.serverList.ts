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
    "http://localhost:7164",
    "https://accounts.google.com",
];

const _AuthServerList = {

    baseURL: `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/`,

    signIn: [
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/signin`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/fetch-user`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/verify-user-refresh-token`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/verify-user-access-token`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/google`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/google/callback`,
    ],
    signUp: [
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/signup`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/createuser`,
    ],
    forgetPassword: [
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/forget-password`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/verify-reset-password-otp`,
        `http://${envBackendAPI.APP_BACKEND}/api/v1/auth/update-password`,
    ]
}

export const AuthServerList = Object.freeze(_AuthServerList);
