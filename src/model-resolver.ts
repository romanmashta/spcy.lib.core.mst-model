import { IAnyType } from '@spcy/pub.mobx-state-tree';
import * as cr from '@spcy/lib.core.reflection';

export interface ModelWithType {
  $typeInfo: cr.TypeInfo;
}
export interface ModelResolver {
  resolve(ref: cr.TypeReference): IAnyType;
}
