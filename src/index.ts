import _ from 'lodash';
import { IAnyType, types } from '@spcy/pub.mobx-state-tree';
import * as cr from '@spcy/lib.core.reflection';
import { Repository } from './repository';

const simpleMap = {
  string: types.string,
  number: types.number,
  boolean: types.boolean,
  date: types.Date,
  null: types.null
};

const GlobalRepository = new Repository();

class ModelBuilder {
  buildModel = (def: cr.ObjectType, name: string | undefined = undefined): IAnyType =>
    _.isObject(def.additionalProperties)
      ? types.map(this.buildType(def.additionalProperties))
      : types.model(
          name || 'Object',
          _.mapValues(def.properties, (p: cr.TypeInfo, key: string) =>
            _.includes(def.required, key) ? this.buildType(p) : types.maybe(this.buildType(p))
          )
        );

  buildSimpleType = (def: cr.SimpleType): IAnyType => simpleMap[def.type];

  buildArray = (def: cr.ArrayType): IAnyType => types.array(this.buildType(def.items));

  buildOneOf = (def: cr.OneOf): IAnyType => types.union(..._.map(def.oneOf, t => this.buildType(t)));

  buildTypeReference = (def: cr.TypeReference): IAnyType => types.late(() => GlobalRepository.resolve(def.$ref));

  buildConstLiteral = (def: cr.ConstLiteral): IAnyType => types.literal(def.const);

  buildType = (def: cr.TypeInfo, name: string | undefined = undefined): IAnyType => {
    if (cr.isObjectType(def)) return this.buildModel(def, name);
    if (cr.isSimpleType(def)) return this.buildSimpleType(def);
    if (cr.isArrayType(def)) return this.buildArray(def);
    if (cr.isOneOf(def)) return this.buildOneOf(def);
    if (cr.isTypeReference(def)) return this.buildTypeReference(def);
    if (cr.isConstLiteral(def)) return this.buildConstLiteral(def);
    return types.null;
  };

  buildModule = (module: cr.Module): { [name: string]: IAnyType } => {
    const definitions = _.mapValues(module.$defs, (def, name) => this.buildType(def, name));
    GlobalRepository.register(definitions);
    return definitions;
  };
}

export const buildModule = (module: cr.Module): { [name: string]: IAnyType } => new ModelBuilder().buildModule(module);
