import { TestCase } from '../test-case';
import { Data } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<Data> = {
  meta: Types,
  rootType: Types.Data,
  data: {
    Users: {
      meta: 'none',
      items: [
        { name: 'Bob', isActive: true },
        { name: 'Bill', isActive: true }
      ]
    },
    Tasks: {
      meta: {
        count: 2,
        time: 100
      },
      items: [
        { isDone: false, description: 'Task 1' },
        { isDone: false, description: 'Task 2' }
      ]
    }
  }
};
