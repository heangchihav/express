import jwt from 'jsonwebtoken'
import { REFRESH_TOKEN_SECRET } from '../config/secret';
export const generateRefreshToken = (hashedRefreshToken: any) => {
    return jwt.sign({ refreshToken: hashedRefreshToken.id }, REFRESH_TOKEN_SECRET, {
        expiresIn: "365d",
    });
}