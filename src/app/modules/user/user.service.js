import { prisma } from '@/config';
export const getUser = async () => {
    const user = await prisma.user.findFirst({});
    return user;
};
