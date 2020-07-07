import * as _ from 'lodash';
import { IAnyType, types } from '@spcy/pub.mobx-state-tree';
import * as cr from '@spcy/lib.core.reflection';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { ModelResolver } from './model-resolver';

export class ModelBuilder {
  private resolver: ModelResolver;
  public packageScope: string;

  constructor(resolver: ModelResolver) {
    this.packageScope = 'root';
    this.resolver = resolver;
  }

  buildModel = (def: cr.ObjectType, name: string | undefined = undefined): IAnyType =>
    _.isObject(def.additionalProperties)
      ? types.map(this.buildType(def.additionalProperties))
      : types.model(
          name || def.$id || 'Object',
          _.mapValues(def.properties, (p: cr.TypeInfo, key: string) =>
            _.includes(def.required, key) ? this.buildType(p) : types.maybe(this.buildType(p))
          )
        );

  buildStringType = (): IAnyType => types.string;

  buildNumberType = (): IAnyType => types.number;

  buildBooleanType = (): IAnyType => types.boolean;

  buildDateType = (): IAnyType => types.Date;

  buildNullType = (): IAnyType => types.null;

  buildArray = (def: cr.ArrayType): IAnyType => types.array(this.buildType(def.items));

  buildOneOf = (def: cr.OneOf): IAnyType => types.union(..._.map(def.oneOf, t => this.buildType(t)));

  buildAllOf = (def: cr.AllOf): IAnyType => types.compose(..._.map(def.allOf, t => this.buildType(t, undefined, true)));

  resolveAndBuild = (def: cr.TypeReference): IAnyType => {
    const typeDef = SchemaRepository.resolve(def.$refPackage, def.$ref);
    if (!typeDef) throw new Error(`Cannot resolve type: ${def.$refPackage}/${def.$ref}`);
    return this.buildType(typeDef);
  };

  lateResolve = (def: cr.TypeReference): IAnyType => {
    return this.resolver.resolve(def.$refPackage, def.$ref);
  };

  buildTypeReference = (def: cr.TypeReference, resolve?: boolean): IAnyType =>
    resolve ? this.resolveAndBuild(def) : types.late(() => this.lateResolve(def));

  buildConstLiteral = (def: cr.ConstLiteral): IAnyType => types.literal(def.const);

  buildType = (def: cr.TypeInfo, name?: string, resolve?: boolean): IAnyType => {
    if (cr.isObjectType(def)) return this.buildModel(def, name);
    if (cr.isStringType(def)) return this.buildStringType();
    if (cr.isNumberType(def)) return this.buildNumberType();
    if (cr.isBooleanType(def)) return this.buildBooleanType();
    if (cr.isDateType(def)) return this.buildDateType();
    if (cr.isNullType(def)) return this.buildNullType();
    if (cr.isArrayType(def)) return this.buildArray(def);
    if (cr.isOneOf(def)) return this.buildOneOf(def);
    if (cr.isAllOf(def)) return this.buildAllOf(def);
    if (cr.isTypeReference(def)) return this.buildTypeReference(def, resolve);
    if (cr.isConstLiteral(def)) return this.buildConstLiteral(def);
    return types.null;
  };

  /*
  buildModule = (module: cr.Module): { [name: string]: IAnyType } => {
    const definitions = _.reduce(
      module.$defs,
      (r, def) => ({ ...r, [def.$id || '']: this.buildType(def, def.$id) }),
      {}
    );
    GlobalRepository.register(definitions);
    return definitions;
  }; */
}

// export const buildModule = (module: cr.Module): { [name: string]: IAnyType } => new ModelBuilder().buildModule(module);
