import { TestCase } from './test-case';

export const testCase: TestCase = {
  meta: {
    $defs: {
      Decorator: {
        type: 'object',
        properties: {
          figure: {
            oneOf: [
              {
                $ref: '#/$defs/Circle'
              },
              {
                $ref: '#/$defs/Square'
              }
            ]
          }
        }
      },
      Circle: {
        type: 'object',
        properties: {
          radius: {
            type: 'number'
          }
        }
      },
      Square: {
        type: 'object',
        properties: {
          side: {
            type: 'number'
          }
        }
      }
    }
  },
  tree: {
    Circle: '{ radius: number }',
    Decorator: '{ figure: null }',
    Square: '{ side: number }'
  }
};
