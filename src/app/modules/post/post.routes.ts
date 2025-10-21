import * as controller from './post.controller';
import * as validation from './post.validation';
import { auth, validateRequest } from '@/app/middlewares';
import { Role } from '@prisma/client';
import { fileUploader } from '@/shared/helpers';
import { Router } from 'express';

const router = Router();

router.post(
  '/',
  auth(Role.ADMIN),
  fileUploader.upload.single('file'),
  validateRequest(validation.postSchema),
  controller.createPost
);

router.get('/', controller.getAllPost);

router.get('/:id', controller.getSinglePost);

router.patch(
  '/:id',
  auth(Role.ADMIN),
  validateRequest(validation.updatePostSchema),
  controller.updatePost
);

router.delete('/delete/:id', auth(Role.ADMIN), controller.deletePost);

export default router;
