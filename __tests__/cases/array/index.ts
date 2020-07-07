import { TestCase } from '../test-case';
import { Config } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<Config> = {
  meta: Types,
  rootType: Types.Config,
  data: {
    colors: ['red', 'gree', 'blue'],
    params: [{ key: 'one', value: 'v1', index: 0 }]
  }
};
