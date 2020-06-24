import { MetaSchema, Module } from '@spcy/lib.core.reflection';
import { TestCase } from '../test-case';

export const testCase: TestCase<Module> = {
  meta: MetaSchema,
  rootType: MetaSchema.$defs.Module,
  data: MetaSchema
};
