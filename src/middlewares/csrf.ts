import csurf from 'csurf';
import { NODE_ENV } from '../config/secret';

const csrfProtection = csurf({
    cookie: {
        httpOnly: true,
        secure: NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Adjust according to your use case
    },
});

export default csrfProtection;
