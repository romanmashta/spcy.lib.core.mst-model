import { IAnyType } from '@spcy/pub.mobx-state-tree';
import { Prototype } from '@spcy/lib.core.reflection';

export interface ModelResolver {
  resolve(packageRef: string, ref: string): IAnyType;
}
