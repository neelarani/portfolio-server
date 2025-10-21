import env from '@/config/env';
import { verifyToken } from '@/shared/helpers/_jwtHelper';
export const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies?.token || req.cookies?.accessToken;
            if (!token) {
                throw new Error('You are not authorized!');
            }
            const verifyUser = verifyToken(token, env.jwt_access_token);
            req.user = verifyUser;
            if (roles.length && !roles.includes(verifyUser.role)) {
                throw new Error('You are not authorized!');
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
