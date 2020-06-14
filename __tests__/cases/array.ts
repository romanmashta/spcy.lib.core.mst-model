import { TestCase } from './test-case';

export const testCase: TestCase = {
  meta: {
    $defs: {
      Config: {
        type: 'object',
        properties: {
          colors: {
            type: 'array',
            items: { type: 'string' }
          },
          params: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                index: { type: 'number' },
                key: { type: 'string' },
                value: { type: 'string' }
              }
            }
          }
        }
      }
    }
  },
  tree: {
    Config: '{ colors: string[]?; params: { index: number; key: string; value: string }[]? }'
  }
};
