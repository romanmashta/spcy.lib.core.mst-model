import { IAnyType } from '@spcy/pub.mobx-state-tree';

export interface ModelResolver {
  resolve(ref: string): IAnyType;
}
