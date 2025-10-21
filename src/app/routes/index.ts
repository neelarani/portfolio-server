import { Router } from 'express';
import * as modules from '@/app/modules';

const moduleRoutes: Array<{ path: string; route: Router }> = [
  {
    path: '/auth',
    route: modules.AuthRoutes,
  },
  {
    path: '/user',
    route: modules.UserRoutes,
  },
  {
    path: '/post',
    route: modules.PostRoutes,
  },
  {
    path: '/project',
    route: modules.ProjectRoutes,
  },
];

export default moduleRoutes.reduce(
  (router, module) => router.use(module.path, module.route),
  Router()
);
