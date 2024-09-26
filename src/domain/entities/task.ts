import { ITask, TaskStatus } from '../../interfaces';

export class TaskEntity {
  public id?: string;
  public title: string;
  public body: string;
  public status?: TaskStatus;

  constructor(options: ITask) {
    const { id, title, body, status } = options;
    this.id = id;
    this.title = title;
    this.body = body;
    this.status = status;
  }

  static fromObject = (object: { [key: string]: any; }): TaskEntity => {
    const { id, title, body, status } = object;
    const task = new TaskEntity({ id, title, body, status });
    return task;
  };
}
