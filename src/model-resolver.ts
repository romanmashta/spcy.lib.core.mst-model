import { IAnyType } from '@spcy/pub.mobx-state-tree';

export interface ModelResolver {
  resolve(packageRef: string, ref: string): IAnyType;
}
