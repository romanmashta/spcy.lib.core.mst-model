import { TestCase } from '../test-case';
import { Config } from './index.model';
import { MetaSchema } from './index.schema';

export const testCase: TestCase<Config> = {
  meta: MetaSchema,
  rootType: MetaSchema.$defs.Config,
  data: {
    colors: ['red', 'gree', 'blue'],
    params: [{ key: 'one', value: 'v1', index: 0 }]
  }
};
