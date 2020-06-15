import { TestCase } from './test-case';

export interface Config {
  [name: string]: Section;
}

export interface Section {
  id: string;
  secret: string;
}

export const testCase: TestCase<Config> = {
  meta: {
    $defs: {
      Config: {
        type: 'object',
        additionalProperties: {
          $ref: '#/$defs/Section'
        }
      },
      Section: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          secret: {
            type: 'string'
          }
        }
      }
    }
  },
  tree: {
    Config: 'Map<string, Section>',
    Section: '{ id: (string | undefined?); secret: (string | undefined?) }'
  },
  rootType: 'Config',
  data: {
    chat: { id: 'xxx', secret: 'zzzz' },
    server: { id: 'xxx', secret: 'zzzz' }
  }
};
