import { TestCase } from '../test-case';
import { Config } from './config.model';
import { MetaSchema } from './config.schema';

export const testCase: TestCase<Config> = {
  meta: MetaSchema,
  tree: {
    '@spcy/lib.core.mst-model/Config': 'Map<string, @spcy/lib.core.mst-model/Section>',
    '@spcy/lib.core.mst-model/Section': '{ id: string; secret: string }'
  },
  rootType: '@spcy/lib.core.mst-model/Config',
  data: {
    chat: { id: 'xxx', secret: 'zzzz' },
    server: { id: 'xxx', secret: 'zzzz' }
  }
};
