import { TestCase } from '../test-case';
import { Config } from './config.model';
import { MetaSchema } from './config.schema';

export const testCase: TestCase<Config> = {
  meta: MetaSchema,
  tree: {
    '#/$defs/Config': '{ colors: string[]; params: { key: string; value: string; index: number }[] }'
  },
  rootType: MetaSchema.$defs.Config,
  data: {
    colors: ['red', 'gree', 'blue'],
    params: [{ key: 'one', value: 'v1', index: 0 }]
  }
};
