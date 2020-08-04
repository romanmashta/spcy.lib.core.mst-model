/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

const ToDoType: r.TypeInfo = {
  $id: 'ToDo',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['isDone', 'description'],
  properties: {
    isDone: {
      type: 'boolean'
    },
    description: {
      type: 'string'
    }
  }
};

const ToDo: r.Prototype<m.ToDo> = {
  ref: { $ref: ToDoType.$id!, $refPackage: ToDoType.$package! },
  typeInfo: ToDoType
};

const CollectionType: r.TypeInfo = {
  $id: 'Collection',
  $package: 'lib.core.mst-model',
  $typeArguments: ['T', 'U'],
  type: 'object',
  required: ['items', 'meta'],
  properties: {
    items: {
      type: 'array',
      items: {
        $ref: 'T',
        $refPackage: 'lib.core.mst-model'
      }
    },
    meta: {
      $ref: 'U',
      $refPackage: 'lib.core.mst-model'
    }
  }
};

const Collection: r.PrototypeInfo = {
  ref: { $ref: CollectionType.$id!, $refPackage: CollectionType.$package! },
  typeInfo: CollectionType
};

const MetaType: r.TypeInfo = {
  $id: 'Meta',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['count', 'time'],
  properties: {
    count: {
      type: 'number'
    },
    time: {
      type: 'number'
    }
  }
};

const Meta: r.Prototype<m.Meta> = {
  ref: { $ref: MetaType.$id!, $refPackage: MetaType.$package! },
  typeInfo: MetaType
};

const DataType: r.TypeInfo = {
  $id: 'Data',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['Users', 'Tasks'],
  properties: {
    Users: {
      $ref: 'Collection',
      $refPackage: 'lib.core.mst-model',
      $arguments: [
        {
          $ref: 'User',
          $refPackage: 'lib.core.mst-model'
        },
        {
          type: 'string'
        }
      ],
      $refArguments: 'lib.core.mst-model.User|string'
    },
    Tasks: {
      $ref: 'Collection',
      $refPackage: 'lib.core.mst-model',
      $arguments: [
        {
          $ref: 'ToDo',
          $refPackage: 'lib.core.mst-model'
        },
        {
          $ref: 'Meta',
          $refPackage: 'lib.core.mst-model'
        }
      ],
      $refArguments: 'lib.core.mst-model.ToDo|lib.core.mst-model.Meta'
    }
  }
};

const Data: r.Prototype<m.Data> = {
  ref: { $ref: DataType.$id!, $refPackage: DataType.$package! },
  typeInfo: DataType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    User: UserType,
    ToDo: ToDoType,
    Collection: CollectionType,
    Meta: MetaType,
    Data: DataType
  }
};

export const Types = {
  User,
  ToDo,
  Collection,
  Meta,
  Data
};
