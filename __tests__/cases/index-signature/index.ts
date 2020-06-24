import { TestCase } from '../test-case';
import { KeyedConfig } from './index.model';
import { MetaSchema } from './index.schema';

export const testCase: TestCase<KeyedConfig> = {
  meta: MetaSchema,
  rootType: MetaSchema.$defs.KeyedConfig,
  data: {
    chat: { id: 'xxx', secret: 'zzzz' },
    server: { id: 'xxx', secret: 'zzzz' }
  }
};
