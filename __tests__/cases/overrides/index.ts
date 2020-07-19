import { TestCase } from '../test-case';
import { DataWithOverrides } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<DataWithOverrides> = {
  meta: Types,
  rootType: Types.DataWithOverrides,
  data: {
    collections: {
      active: {
        items: [
          { name: 'Bob', isActive: true },
          { name: 'Bill', isActive: true }
        ]
      }
    }
  }
};
