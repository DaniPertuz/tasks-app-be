import { TaskEntity } from '../entities/task';

export abstract class TaskRepository {
  abstract createTask(task: TaskEntity): Promise<TaskEntity | null>;
  abstract getTasks(): Promise<TaskEntity[]>;
  abstract getTask(id: string): Promise<TaskEntity | null>;
  abstract updateTask(id: string, task: TaskEntity): Promise<TaskEntity | null>;
  abstract removeTask(id: string): Promise<TaskEntity | null>;
}
