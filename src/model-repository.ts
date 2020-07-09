import { IAnyType, getSnapshot } from '@spcy/pub.mobx-state-tree';
import { Prototype, SchemaRepository } from '@spcy/lib.core.reflection';
import * as cr from '@spcy/lib.core.reflection';
import { ModelBuilder } from './model-builder';
import { ModelResolver } from './model-resolver';

class ModelRepositoryInternal implements ModelResolver {
  private builder: ModelBuilder = new ModelBuilder(this);
  private repo: Map<string, IAnyType | null> = new Map<string, IAnyType | null>();

  buildModel = (ref: cr.TypeReference): IAnyType => {
    const schema = SchemaRepository.resolve(ref.$refPackage, ref.$ref);
    if (!schema) {
      throw new Error(`Cannot resolve schema for ${ref}`);
    }
    this.repo.set(ref.$ref, null);
    this.builder.packageScope = ref.$refPackage;
    const model = this.builder.buildType(schema);
    this.repo.set(ref.$ref, model);
    return model;
  };

  resolve = (ref: cr.TypeReference): IAnyType => {
    const model = this.repo.get(ref.$ref);
    if (model === null) throw new ReferenceError();
    return model || this.buildModel(ref);
  };
}

export const ModelRepository: ModelResolver = new ModelRepositoryInternal();

export const createInstance = <T>(type: Prototype<T>, data: T): T => {
  const model = ModelRepository.resolve(type);
  return model.create(data) as T;
};

export const getData = <T>(node: T): string => getSnapshot(node);

declare global {
  interface Object {
    patch<T>(this: T, fn: (self: T) => void): void;
  }
}
