import { MongoDatabase } from '../../../src/data/mongo/init';
import { envs } from '../../../src/plugins/envs.plugin';
import { TaskModel } from '../../../src/data/mongo/models/task.model';

describe('Task model', () => {
  beforeAll(async () => {
    await MongoDatabase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME
    });
  });

  afterAll(async () => {
    await TaskModel.deleteMany();
  });

  test('should return TaskModel', async () => {
    const taskData = {
      title: 'Test title',
      body: 'Test body'
    };

    const task = await TaskModel.create(taskData);

    expect(task.toJSON()).toEqual(expect.objectContaining(taskData));
  });

  test('should return the schema object', () => {
    const expectedSchema = {
      title: { type: String, required: true },
      body: { type: String, required: true },
      status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
      }
    };

    const schema = TaskModel.schema.obj;

    expect(schema).toEqual(expect.objectContaining(expectedSchema));
  });
});
