import { Router } from 'express';
import { TasksController } from './controller';

export class TaskRoutes {
  static get routes(): Router {
    const router = Router();

    const { getTasks, getTaskById, createTask, updateTask, deleteTask } = new TasksController();

    router.get('/', getTasks);
    router.get('/:id', getTaskById);
    router.post('/', createTask);
    router.put('/:id', updateTask);
    router.delete('/:id', deleteTask);

    return router;
  }
}
