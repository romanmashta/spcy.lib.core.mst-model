import { Module } from '@spcy/lib.core.reflection';

export interface TestCase {
  meta: Module;
  tree: {
    [name: string]: string;
  };
}
