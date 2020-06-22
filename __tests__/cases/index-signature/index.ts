import { TestCase } from '../test-case';
import { KeyedConfig } from './config.model';
import { MetaSchema } from './config.schema';

export const testCase: TestCase<KeyedConfig> = {
  meta: MetaSchema,
  tree: {
    '@spcy/lib.core.mst-model/KeyedConfig': 'Map<string, @spcy/lib.core.mst-model/Section>',
    '@spcy/lib.core.mst-model/Section': '{ id: string; secret: string }'
  },
  rootType: MetaSchema.$defs.KeyedConfig,
  data: {
    chat: { id: 'xxx', secret: 'zzzz' },
    server: { id: 'xxx', secret: 'zzzz' }
  }
};
