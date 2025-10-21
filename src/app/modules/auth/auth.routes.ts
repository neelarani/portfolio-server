import { Router } from 'express';
import * as controller from './auth.controller';
import * as validation from './auth.validation';
import { validateRequest } from '@/app/middlewares';

const router = Router();

router.post(
  '/login',
  validateRequest(validation.zCredentialLoginSchema),
  controller.login
);

router.post('/logout', controller.logout);

export default router;
