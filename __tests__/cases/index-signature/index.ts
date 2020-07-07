import { TestCase } from '../test-case';
import { KeyedConfig } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<KeyedConfig> = {
  meta: Types,
  rootType: Types.KeyedConfig,
  data: {
    chat: { id: 'xxx', secret: 'zzzz' },
    server: { id: 'xxx', secret: 'zzzz' }
  }
};
