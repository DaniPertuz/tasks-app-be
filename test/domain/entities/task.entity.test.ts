import { TaskEntity } from '../../../src/domain/entities/task';
import { TaskStatus } from '../../../src/interfaces';

describe('Task entity', () => {
  const data = {
    title: 'Test title',
    body: 'Test body',
    status: TaskStatus.Pending
  };

  test('should create a TaskEntity instance', () => {
    const task = new TaskEntity(data);

    expect(task).toBeInstanceOf(TaskEntity);
    expect(task.title).toBe(data.title);
    expect(task.body).toBe(data.body);
    expect(task.status).toBe(data.status);
  });

  test('should create a TaskEntity from object', () => {
    const task = TaskEntity.fromObject(data);

    expect(task).toBeInstanceOf(TaskEntity);
    expect(task.title).toBe(data.title);
    expect(task.body).toBe(data.body);
    expect(task.status).toBe(data.status);
  });
});
