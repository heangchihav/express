import dotenv from 'dotenv'

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const SERVER_PORT = process.env.SERVER_PORT || 3000;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "dummy access token";
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "dummy access token";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
export const HOST_NAME = process.env.HOST_NAME || '127.0.0.1'
export const CALL_BACK_URL = process.env.CALL_BACK || `http://${HOST_NAME}:${SERVER_PORT}/api/auth/google/callback`
export const SESSION_SECRET = process.env.SESSION_SECRET || "dummy secretKey";
