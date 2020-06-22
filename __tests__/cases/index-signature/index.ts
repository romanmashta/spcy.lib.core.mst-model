import { TestCase } from '../test-case';
import { KeyedConfig } from './config.model';
import { MetaSchema } from './config.schema';

export const testCase: TestCase<KeyedConfig> = {
  meta: MetaSchema,
  tree: {
    '#/$defs/KeyedConfig': 'Map<string, #/$defs/Section>',
    '#/$defs/Section': '{ id: string; secret: string }'
  },
  rootType: MetaSchema.$defs.KeyedConfig,
  data: {
    chat: { id: 'xxx', secret: 'zzzz' },
    server: { id: 'xxx', secret: 'zzzz' }
  }
};
