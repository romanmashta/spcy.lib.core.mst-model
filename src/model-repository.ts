import { IAnyType, IStateTreeNode, IType } from '@spcy/pub.mobx-state-tree';
import { Prototype, SchemaRepository } from '@spcy/lib.core.reflection';
import { ModelBuilder } from './model-builder';
import { ModelResolver } from './model-resolver';

class ModelRepositoryInternal implements ModelResolver {
  private builder: ModelBuilder = new ModelBuilder(this);
  private repo: Map<string, IAnyType | null> = new Map<string, IAnyType | null>();

  buildModel = (packageRef: string, ref: string): IAnyType => {
    const schema = SchemaRepository.resolve(packageRef, ref);
    if (!schema) {
      throw new Error(`Cannot resolve schema for ${ref}`);
    }
    this.repo.set(ref, null);
    this.builder.packageScope = packageRef;
    const model = this.builder.buildType(schema);
    this.repo.set(ref, model);
    return model;
  };

  resolve = (packageRef: string, ref: string): IAnyType => {
    const model = this.repo.get(ref);
    if (model === null) throw new ReferenceError();
    return model || this.buildModel(packageRef, ref);
  };
}

export const ModelRepository: ModelResolver = new ModelRepositoryInternal();

export function createInstance<T>(type: Prototype<T>, data: T): T & IStateTreeNode<IType<any, T, any>> {
  const model = ModelRepository.resolve(type.package, type.id!);
  return model.create(data) as T;
}
