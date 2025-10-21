import { catchAsync } from '@/shared';
import { ZodObject, ZodRawShape } from 'zod';

export const validateRequest = (zs: ZodObject<ZodRawShape>) =>
  catchAsync(async (req, _, next) => {
    req.body = req.body?.data
      ? await zs.parseAsync(JSON.parse(req.body.data))
      : await zs.parseAsync(req.body);

    next();
  });
