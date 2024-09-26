import { MongoDatabase, TaskModel } from '../../../src/data/mongo';
import { TaskEntity } from '../../../src/domain/entities/task';
import { MongoTaskDatasource } from '../../../src/infrastructure/datasources/mongo-task.datasource';
import { TaskStatus } from '../../../src/interfaces';
import { envs } from '../../../src/plugins/envs.plugin';

describe('Mongo Task datasource', () => {

  const taskDatasource = new MongoTaskDatasource();

  beforeAll(async () => {
    await MongoDatabase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME
    });
  });

  const testTask = new TaskEntity({
    title: 'Test title',
    body: 'Test body',
    status: TaskStatus.Pending
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await TaskModel.deleteMany();
  });

  test('should create a task', async () => {
    const taskDB = await taskDatasource.createTask(testTask);

    expect(taskDB).toBeInstanceOf(TaskEntity);
  });

  test('should get all tasks', async () => {
    await taskDatasource.createTask(testTask);
    await taskDatasource.createTask(testTask);

    const tasks = await taskDatasource.getTasks();

    expect(tasks.length).toBe(2);
  });

  test('should get task', async () => {
    const newTask = await taskDatasource.createTask(testTask);

    const taskDB = await taskDatasource.getTask(newTask?.id!);

    expect(taskDB).toEqual(expect.objectContaining({
      title: 'Test title',
      body: 'Test body',
      status: TaskStatus.Pending
    }));
  });

  test('should update task', async () => {
    const taskTest = new TaskEntity({
      title: 'New Testing Task',
      body: 'New Testing Body',
      status: TaskStatus.Pending
    });

    const task = await taskDatasource.createTask(taskTest);

    const updatedTask: TaskEntity = {
      title: 'New Testing Task updated',
      body: 'New Testing body updated'
    };

    const taskDB = await taskDatasource.updateTask(task?.id!, updatedTask);

    expect(taskDB).toEqual(expect.objectContaining({
      title: 'New Testing Task updated'
    }));
  });

  test('should delete task', async () => {
    const task = new TaskEntity({
      id: '65cec1ef73d47156e24f0c35',
      title: 'Test title',
      body: 'Test body',
      status: TaskStatus.Pending
    });

    await taskDatasource.createTask(task);

    const taskDB = await taskDatasource.removeTask('65cec1ef73d47156e24f0c35');

    expect(taskDB).toBeNull();
  });
});
