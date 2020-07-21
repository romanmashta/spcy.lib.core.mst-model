import { IAnyType, getSnapshot, types, getType, isStateTreeNode, IAnyStateTreeNode } from '@spcy/pub.mobx-state-tree';
import { Prototype, SchemaRepository } from '@spcy/lib.core.reflection';
import * as cr from '@spcy/lib.core.reflection';
import { ModelBuilder } from './model-builder';
import { ModelResolver, ModelWithType } from './model-resolver';

class ModelRepositoryInternal implements ModelResolver {
  private builder: ModelBuilder = new ModelBuilder(this);
  private repo: Map<string, IAnyType | null> = new Map<string, IAnyType | null>();

  isGenericArgument = (ref: cr.TypeReference) => ref.$ref.length === 1;

  buildModel = (ref: cr.TypeReference, typeId: string): IAnyType => {
    if (this.isGenericArgument(ref)) return types.model(ref.$ref);
    const schema = SchemaRepository.resolve(ref);
    if (!schema) {
      throw new Error(`Cannot resolve schema for ${typeId}`);
    }
    this.repo.set(typeId, null);
    this.builder.packageScope = ref.$refPackage;
    const model = this.builder.buildType(schema);
    this.repo.set(typeId, model);
    const typedModel = (model as unknown) as ModelWithType;
    typedModel.$typeInfo = schema;
    return model;
  };

  resolve = (ref: cr.TypeReference): IAnyType => {
    const typeId = `${ref.$refPackage}.${ref.$ref}.${ref.$refArguments || ''}`;
    const model = this.repo.get(typeId);
    if (model === null) throw new ReferenceError();
    return model || this.buildModel(ref, typeId);
  };
}

export const ModelRepository: ModelResolver = new ModelRepositoryInternal();

export const createInstance = <T>(type: Prototype<T>, data: T): T => {
  const model = ModelRepository.resolve(type.ref);
  return model.create(data) as T;
};

export const isObject = (object: unknown): boolean => isStateTreeNode(object);

export const getObjectSchema = (object: unknown): cr.TypeInfo =>
  ((getType(object as IAnyStateTreeNode) as unknown) as ModelWithType).$typeInfo;

export const getData = <T>(node: T): string => getSnapshot(node);

declare global {
  interface Object {
    patch<T>(this: T, fn: (self: T) => void): void;
  }
}
