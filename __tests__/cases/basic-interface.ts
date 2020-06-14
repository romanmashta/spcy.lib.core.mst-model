import { TestCase } from './test-case';

export const testCase: TestCase = {
  meta: {
    $defs: {
      Person: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          age: {
            type: 'number'
          },
          isActive: {
            type: 'boolean'
          }
        }
      }
    }
  },
  tree: {
    Person: '{ firstName: string; lastName: string; age: number; isActive: boolean }'
  }
};
