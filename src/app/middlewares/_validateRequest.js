import { catchAsync } from '@/shared';
export const validateRequest = (zs) => catchAsync(async (req, _, next) => {
    req.body = req.body?.data
        ? await zs.parseAsync(JSON.parse(req.body.data))
        : await zs.parseAsync(req.body);
    next();
});
