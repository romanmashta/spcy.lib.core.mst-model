import { Module, TypeInfo } from '@spcy/lib.core.reflection';

export interface TestCase<T> {
  meta: Module;
  rootType: TypeInfo;
  data?: T;
}
