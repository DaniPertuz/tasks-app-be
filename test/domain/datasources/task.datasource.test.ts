import { TaskDatasource } from '../../../src/domain/datasources/task.datasource';
import { TaskEntity } from '../../../src/domain/entities/task';


describe('Task datasource', () => {
  class MockDatasource implements TaskDatasource {
    createTask(task: TaskEntity): Promise<TaskEntity | null> {
      throw new Error('Method not implemented.');
    }
    getTasks(): Promise<TaskEntity[]> {
      throw new Error('Method not implemented.');
    }
    getTask(id: string): Promise<TaskEntity | null> {
      throw new Error('Method not implemented.');
    }
    updateTask(id: string, task: TaskEntity): Promise<TaskEntity | null> {
      throw new Error('Method not implemented.');
    }
    removeTask(id: string): Promise<TaskEntity | null> {
      throw new Error('Method not implemented.');
    }
}

  test('should test the abstract Task class', async () => {
    const mockDatasource = new MockDatasource();

    expect(mockDatasource).toBeInstanceOf(MockDatasource);
    expect(typeof mockDatasource.createTask).toBe('function');
    expect(typeof mockDatasource.getTasks).toBe('function');
    expect(typeof mockDatasource.getTask).toBe('function');
    expect(typeof mockDatasource.updateTask).toBe('function');
    expect(typeof mockDatasource.removeTask).toBe('function');
  });
});
