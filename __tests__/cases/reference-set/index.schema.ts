/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const NamedObjectType: r.TypeInfo = {
  $id: 'NamedObject',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string'
    }
  }
};

const NamedObject: r.Prototype<m.NamedObject> = {
  ref: { $ref: NamedObjectType.$id!, $refPackage: NamedObjectType.$package! },
  typeInfo: NamedObjectType
};

const IndexedObjectType: r.TypeInfo = {
  $id: 'IndexedObject',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['index'],
  properties: {
    index: {
      type: 'number'
    }
  }
};

const IndexedObject: r.Prototype<m.IndexedObject> = {
  ref: { $ref: IndexedObjectType.$id!, $refPackage: IndexedObjectType.$package! },
  typeInfo: IndexedObjectType
};

const ItemType: r.TypeInfo = {
  $id: 'Item',
  $package: 'lib.core.mst-model',
  oneOf: [
    {
      $ref: 'NamedObject',
      $refPackage: 'lib.core.mst-model'
    },
    {
      $ref: 'IndexedObject',
      $refPackage: 'lib.core.mst-model'
    }
  ]
};

const Item: r.Prototype<m.Item> = {
  ref: { $ref: ItemType.$id!, $refPackage: ItemType.$package! },
  typeInfo: ItemType
};

const ObjectCollectionType: r.TypeInfo = {
  $id: 'ObjectCollection',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['name', 'collection'],
  properties: {
    name: {
      type: 'string'
    },
    collection: {
      $ref: 'ReferenceSet',
      $refPackage: 'lib.core.reflection'
    }
  }
};

const ObjectCollection: r.Prototype<m.ObjectCollection> = {
  ref: { $ref: ObjectCollectionType.$id!, $refPackage: ObjectCollectionType.$package! },
  typeInfo: ObjectCollectionType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    NamedObject: NamedObjectType,
    IndexedObject: IndexedObjectType,
    Item: ItemType,
    ObjectCollection: ObjectCollectionType
  }
};

export const Types = {
  NamedObject,
  IndexedObject,
  Item,
  ObjectCollection
};
