import { TaskDatasource } from '../../domain/datasources/task.datasource';
import { TaskEntity } from '../../domain/entities/task';
import { TaskRepository } from '../../domain/repository/task.repository';

export class TaskRepositoryImpl implements TaskRepository {
  constructor(
    private readonly taskDatasource: TaskDatasource
  ) { }

  async createTask(task: TaskEntity): Promise<TaskEntity | null> {
    return this.taskDatasource.createTask(task);
  }

  async getTasks(): Promise<TaskEntity[]> {
    return this.taskDatasource.getTasks();
  }

  async getTask(id: string): Promise<TaskEntity | null> {
    return this.taskDatasource.getTask(id);
  }

  async updateTask(id: string, task: TaskEntity): Promise<TaskEntity | null> {
    return this.taskDatasource.updateTask(id, task);
  }

  async removeTask(id: string): Promise<TaskEntity | null> {
    return this.taskDatasource.removeTask(id);
  }
}
