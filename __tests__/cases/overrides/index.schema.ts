import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const UserType: r.TypeInfo = {
  $id: 'User',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string'
    },
    isActive: {
      type: 'boolean'
    }
  }
};

const User: r.Prototype<m.User> = {
  ref: { $ref: UserType.$id!, $refPackage: UserType.$package! },
  typeInfo: UserType
};

const CollectionBaseType: r.TypeInfo = {
  $id: 'CollectionBase',
  $package: 'lib.core.mst-model',
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  }
};

const CollectionBase: r.Prototype<m.CollectionBase> = {
  ref: { $ref: CollectionBaseType.$id!, $refPackage: CollectionBaseType.$package! },
  typeInfo: CollectionBaseType
};

const CollectionWithTypeType: r.TypeInfo = {
  $id: 'CollectionWithType',
  $package: 'lib.core.mst-model',
  $typeArguments: ['T'],
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        $ref: 'T',
        $refPackage: 'lib.core.mst-model'
      }
    }
  }
};

const CollectionWithType: r.PrototypeInfo = {
  ref: { $ref: CollectionWithTypeType.$id!, $refPackage: CollectionWithTypeType.$package! },
  typeInfo: CollectionWithTypeType
};

const DataWithOverridesType: r.TypeInfo = {
  $id: 'DataWithOverrides',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['collections'],
  properties: {
    collections: {
      type: 'object',
      required: ['active'],
      properties: {
        active: {
          $ref: 'CollectionWithType',
          $refPackage: 'lib.core.mst-model',
          $arguments: [
            {
              $ref: 'User',
              $refPackage: 'lib.core.mst-model'
            }
          ],
          $refArguments: 'lib.core.mst-model.User'
        }
      }
    }
  }
};

const DataWithOverrides: r.Prototype<m.DataWithOverrides> = {
  ref: { $ref: DataWithOverridesType.$id!, $refPackage: DataWithOverridesType.$package! },
  typeInfo: DataWithOverridesType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    User: UserType,
    CollectionBase: CollectionBaseType,
    CollectionWithType: CollectionWithTypeType,
    DataWithOverrides: DataWithOverridesType
  }
};

export const Types = {
  User,
  CollectionBase,
  CollectionWithType,
  DataWithOverrides
};
