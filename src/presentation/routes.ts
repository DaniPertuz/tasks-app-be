import cors from 'cors';
import { Router } from 'express';
import { TaskRoutes } from './tasks/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use(cors());

    router.use('/api/tasks', TaskRoutes.routes);

    return router;
  }
}
