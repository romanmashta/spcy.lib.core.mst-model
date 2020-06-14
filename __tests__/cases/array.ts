import { TestCase } from './test-case';

export interface Config {
  colors: string[];
  params: {
    key: string;
    value: string;
    index: number;
  }[];
}

export const testCase: TestCase<Config> = {
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
  },
  data: {
    colors: ['red', 'gree', 'blue'],
    params: [{ key: 'one', value: 'v1', index: 0 }]
  }
};
