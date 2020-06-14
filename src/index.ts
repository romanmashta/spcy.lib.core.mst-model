import _ from 'lodash';
import { IAnyType, types } from 'mobx-state-tree';
import * as cr from '@spcy/lib.core.reflection';

const simpleMap = {
  string: types.string,
  number: types.number,
  boolean: types.boolean,
  date: types.Date,
  null: types.null
};

class ModelBuilder {
  buildModel = (def: cr.ObjectType, name: string | undefined = undefined): IAnyType =>
    types.model(name || 'Object', _.mapValues(def.properties, this.buildType));

  buildSimpleType = (def: cr.SimpleType): IAnyType => simpleMap[def.type];

  buildArray = (def: cr.ArrayType): IAnyType => types.array(this.buildType(def.items));

  buildOneOf = (def: cr.OneOf): IAnyType => types.union(..._.map(def.oneOf, t => this.buildType(t)));

  buildTypeReference = (def: cr.TypeReference): IAnyType => types.late(() => types.literal(def.$ref));

  buildType = (def: cr.TypeInfo, name: string | undefined = undefined): IAnyType => {
    if (cr.isObjectType(def)) return this.buildModel(def, name);
    if (cr.isSimpleType(def)) return this.buildSimpleType(def);
    if (cr.isArrayType(def)) return this.buildArray(def);
    if (cr.isOneOf(def)) return this.buildOneOf(def);
    if (cr.isTypeReference(def)) return this.buildTypeReference(def);
    return types.null;
  };

  buildModule = (module: cr.Module): { [name: string]: IAnyType } =>
    _.mapValues(module.$defs, (def, name) => this.buildType(def, name));
}

export const buildModule = (module: cr.Module): { [name: string]: IAnyType } => new ModelBuilder().buildModule(module);
