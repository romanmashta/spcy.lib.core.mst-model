import _ from 'lodash';
import { IAnyType, types } from 'mobx-state-tree';
import {
  ObjectType,
  TypeInfo,
  SimpleType,
  ArrayType,
  Module,
  OneOf,
  TypeReference,
  isObjectType,
  isSimpleType,
  isArrayType,
  isOneOf,
  isTypeReference
} from '@spcy/lib.core.reflection';

const simpleMap = {
  string: types.string,
  number: types.number,
  boolean: types.boolean,
  date: types.Date,
  null: types.null
};

export const buildModel = (def: ObjectType, name: string | undefined = undefined): IAnyType =>
  types.model(name || 'Object', _.mapValues(def.properties, buildType));
export const buildSimpleType = (def: SimpleType): IAnyType => simpleMap[def.type];
export const buildArray = (def: ArrayType): IAnyType => types.array(buildType(def.items));
export const buildOneOf = (def: OneOf): IAnyType => types.union(..._.map(def.oneOf, t => buildType(t)));
export const buildTypeReference = (def: TypeReference): IAnyType => types.late(() => types.literal(def.$ref));

export const buildType = (def: TypeInfo, name: string | undefined = undefined): IAnyType => {
  if (isObjectType(def)) return buildModel(def, name);
  if (isSimpleType(def)) return buildSimpleType(def);
  if (isArrayType(def)) return buildArray(def);
  if (isOneOf(def)) return buildOneOf(def);
  if (isTypeReference(def)) return buildTypeReference(def);
  return types.null;
};

export const buildModule = (module: Module): { [name: string]: IAnyType } =>
  _.mapValues(module.$defs, (def, name) => buildType(def, name));
