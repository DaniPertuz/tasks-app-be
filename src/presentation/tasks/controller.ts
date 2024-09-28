import { Request, Response } from 'express';
import { MongoTaskDatasource } from '../../infrastructure/datasources/mongo-task.datasource';
import { TaskRepositoryImpl } from '../../infrastructure/repositories/task-impl.datasource';

export class TasksController {
  readonly taskRepo = new TaskRepositoryImpl(
    new MongoTaskDatasource()
  );

  public createTask = async (req: Request, res: Response) => {
    const { title, body, status } = req.body;

    try {
      if (!title || !body) {
        return res.status(400).json({ message: 'Título y descripción son campos requeridos' });
      }

      const newTask = await this.taskRepo.createTask({ title, body, status });
      return res.status(201).json(newTask);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear task', error });
    }
  };

  public getTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await this.taskRepo.getTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener tasks', error });
    }
  };

  public getTaskById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const task = await this.taskRepo.getTask(id);

      if (!task) {
        return res.status(404).json({ message: 'Task no encontrada' });
      }

      return res.json(task);
    } catch (error) {
      return res.status(500).json({ message: 'Error al encontrar task', error });
    }
  };

  public updateTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, body, status } = req.body;

    try {
      const task = await this.taskRepo.getTask(id);

      if (!task) {
        return res.status(404).json({ message: 'Task no encontrada' });
      }

      const updateTask = await this.taskRepo.updateTask(id, { title, body, status });
      return res.json(updateTask);
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar task', error });
    }
  };

  public deleteTask = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const removeTask = await this.taskRepo.removeTask(id);
      return res.json(removeTask);
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar task', error });
    }
  };
}
