import { Module } from '@spcy/lib.core.reflection';

export interface TestCase<T> {
  meta: Module;
  tree: {
    [name: string]: string;
  };
  rootType: string;
  data?: T;
}
