import { ReferenceSet } from '@spcy/lib.core.reflection';

export interface NamedObject {
  name: string;
}

export interface IndexedObject {
  index: number;
}

export type Item = NamedObject | IndexedObject;

export interface ObjectCollection {
  name: string;
  collection: ReferenceSet;
}
