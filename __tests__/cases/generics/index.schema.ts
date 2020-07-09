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
  $ref: UserType.$id!,
  $refPackage: UserType.$package!,
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
  $ref: ToDoType.$id!,
  $refPackage: ToDoType.$package!,
  typeInfo: ToDoType
};

const CollectionType: r.TypeInfo = {
  $id: 'Collection',
  $package: 'lib.core.mst-model',
  $typeArguments: ['T'],
  type: 'object',
  required: ['items', 'count'],
  properties: {
    items: {
      type: 'array',
      items: {
        $ref: 'T',
        $refPackage: 'lib.core.mst-model'
      }
    },
    count: {
      type: 'number'
    }
  }
};

const Collection: r.PrototypeInfo = {
  $ref: CollectionType.$id!,
  $refPackage: CollectionType.$package!,
  typeInfo: CollectionType
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
        }
      ]
    },
    Tasks: {
      $ref: 'Collection',
      $refPackage: 'lib.core.mst-model',
      $arguments: [
        {
          $ref: 'ToDo',
          $refPackage: 'lib.core.mst-model'
        }
      ]
    }
  }
};

const Data: r.Prototype<m.Data> = {
  $ref: DataType.$id!,
  $refPackage: DataType.$package!,
  typeInfo: DataType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    User: UserType,
    ToDo: ToDoType,
    Collection: CollectionType,
    Data: DataType
  }
};

export const Types = {
  User,
  ToDo,
  Collection,
  Data
};
