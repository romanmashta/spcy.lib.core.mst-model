/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const EntityType: r.TypeInfo = {
  $id: 'Entity',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'string'
    }
  }
};

const Entity: r.Prototype<m.Entity> = {
  ref: { $ref: EntityType.$id!, $refPackage: EntityType.$package! },
  typeInfo: EntityType
};

const AuditType: r.TypeInfo = {
  $id: 'Audit',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['createdOn', 'updatedOn'],
  properties: {
    createdOn: {
      type: 'string'
    },
    updatedOn: {
      type: 'string'
    }
  }
};

const Audit: r.Prototype<m.Audit> = {
  ref: { $ref: AuditType.$id!, $refPackage: AuditType.$package! },
  typeInfo: AuditType
};

const PersonEntityType: r.TypeInfo = {
  $id: 'PersonEntity',
  $package: 'lib.core.mst-model',
  allOf: [
    {
      $ref: 'Audit',
      $refPackage: 'lib.core.mst-model'
    },
    {
      $ref: 'Entity',
      $refPackage: 'lib.core.mst-model'
    },
    {
      type: 'object',
      required: ['firstName', 'lastName'],
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        age: {
          type: 'number'
        },
        isActive: {
          type: 'boolean'
        }
      }
    }
  ]
};

const PersonEntity: r.Prototype<m.PersonEntity> = {
  ref: { $ref: PersonEntityType.$id!, $refPackage: PersonEntityType.$package! },
  typeInfo: PersonEntityType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    Entity: EntityType,
    Audit: AuditType,
    PersonEntity: PersonEntityType
  }
};

export const Types = {
  Entity,
  Audit,
  PersonEntity
};
