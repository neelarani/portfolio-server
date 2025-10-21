import { Router } from 'express';
import * as controller from './user.controller';
import { auth } from '@/app/middlewares';
import { Role } from '@prisma/client';

const router = Router();

router.get('/', auth(Role.ADMIN), controller.getUser);

export default router;
