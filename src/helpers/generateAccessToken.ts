import * as jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../config/secret';


export const generateAccessToken = (foundUser: any) => {
    return jwt.sign({ userId: foundUser.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: "1m",
    });
};
