import session from "express-session";
import { NODE_ENV, SESSION_SECRET } from "../config/secret";

export const sessionMiddleware = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: NODE_ENV === 'production' }
})