import env from '@/config/env';
import { verifyToken } from '@/shared/helpers/_jwtHelper';
import type { NextFunction, Request, Response } from 'express';

export const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.cookies?.token || req.cookies?.accessToken;

      if (!token) {
        throw new Error('You are not authorized!');
      }
      const verifyUser = verifyToken(token, env.jwt_access_token!);
      req.user = verifyUser;

      if (roles.length && !roles.includes(verifyUser.role)) {
        throw new Error('You are not authorized!');
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
