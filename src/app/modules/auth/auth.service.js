import { prisma } from '@/config';
import env from '@/config/env';
import { token } from '@/shared/helpers';
import bcrypt from 'bcryptjs';
export const login = async (payload) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email: payload.email,
        },
    });
    const isCorrectPassword = await bcrypt.compare(payload.password, user.password);
    if (!isCorrectPassword) {
        throw new Error('Password is incorrect!');
    }
    const accessToken = token.generateToken({ email: user.email, role: user.role }, env.jwt_access_token, '24h');
    const refreshToken = token.generateToken({ email: user.email, role: user.role }, env.jwt_refresh_token, '90d');
    return {
        accessToken,
        refreshToken,
        user,
    };
};
