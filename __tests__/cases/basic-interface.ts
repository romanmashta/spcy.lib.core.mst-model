import { TestCase } from './test-case';

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isActive: boolean;
}

export const testCase: TestCase<Person> = {
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
  },
  data: {
    age: 20,
    firstName: 'John',
    lastName: 'Deer',
    isActive: true
  }
};
