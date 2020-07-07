import { Module, Types, IndexModule } from '@spcy/lib.core.reflection';
import { TestCase } from '../test-case';

export const testCase: TestCase<Module> = {
  meta: Types,
  rootType: Types.Module,
  data: IndexModule
};
