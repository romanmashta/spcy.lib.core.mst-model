import { IAnyType, types } from '@spcy/pub.mobx-state-tree';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { ModelBuilder } from './model-builder';
import { ModelResolver } from './model-resolver';

class ModelRepositoryInternal implements ModelResolver {
  private builder: ModelBuilder = new ModelBuilder(this);
  private repo: Map<string, IAnyType> = new Map<string, IAnyType>();

  buildModel = (ref: string): IAnyType => {
    const schema = SchemaRepository.resolve(ref);
    if (!schema) {
      throw new Error(`Cannot resolve schema for ${ref}`);
    }
    this.repo.set(ref, types.model(ref));
    const model = this.builder.buildType(schema);
    this.repo.set(ref, model);
    return model;
  };

  resolve = (ref: string): IAnyType => {
    return this.repo.get(ref) || this.buildModel(ref);
  };
}

export const ModelRepository: ModelResolver = new ModelRepositoryInternal();
