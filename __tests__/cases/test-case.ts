import { Module, TypeInfo } from '@spcy/lib.core.reflection';

export interface TestCase<T> {
  meta: Module;
  tree: {
    [name: string]: string;
  };
  rootType: TypeInfo;
  data?: T;
}
