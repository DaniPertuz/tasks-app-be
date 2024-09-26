import { TaskModel } from '../../data/mongo';
import { TaskDatasource } from '../../domain/datasources/task.datasource';
import { TaskEntity } from '../../domain/entities/task';
import { TaskStatus } from '../../interfaces';

export class MongoTaskDatasource implements TaskDatasource {

  async createTask(task: TaskEntity): Promise<TaskEntity | null> {
    const { title, body } = task;

    const newTask = await TaskModel.create({
      title, body, status: TaskStatus.Pending
    });

    return TaskEntity.fromObject(newTask);
  }

  async getTasks(): Promise<TaskEntity[]> {
    const tasks = await TaskModel.find({});
    return tasks.map(TaskEntity.fromObject);
  }

  async getTask(id: string): Promise<TaskEntity | null> {
    const task = await TaskModel.findById(id);

    return task ? TaskEntity.fromObject(task) : null;
  }

  async updateTask(id: string, task: TaskEntity): Promise<TaskEntity | null> {
    const updatedTask = await TaskModel.findByIdAndUpdate(id, task, { new: true });

    return updatedTask ? TaskEntity.fromObject(updatedTask) : null;
  }

  async removeTask(id: string): Promise<TaskEntity | null> {
    const deleteTask = await TaskModel.findByIdAndDelete(id, { new: true });
    return deleteTask ? TaskEntity.fromObject(deleteTask) : null;
  }
}
