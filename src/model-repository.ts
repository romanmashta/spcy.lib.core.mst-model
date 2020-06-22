import { IAnyType } from '@spcy/pub.mobx-state-tree';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { ModelBuilder } from './model-builder';
import { ModelResolver } from './model-resolver';

class ModelRepositoryInternal implements ModelResolver {
  private builder: ModelBuilder = new ModelBuilder(this);
  private repo: Map<string, IAnyType | null> = new Map<string, IAnyType | null>();

  buildModel = (ref: string): IAnyType => {
    const schema = SchemaRepository.resolve(ref);
    if (!schema) {
      throw new Error(`Cannot resolve schema for ${ref}`);
    }
    this.repo.set(ref, null);
    const model = this.builder.buildType(schema);
    this.repo.set(ref, model);
    return model;
  };

  resolve = (ref: string): IAnyType => {
    const model = this.repo.get(ref);
    if (model === null) throw new ReferenceError();
    return model || this.buildModel(ref);
  };
}

export const ModelRepository: ModelResolver = new ModelRepositoryInternal();
