import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const PackageName = 'lib.core.mst-model';

const EntityType: r.TypeInfo = {
  $id: 'Entity',
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'string'
    }
  }
};
const Entity: r.Prototype<m.Entity> = {
  id: EntityType.$id,
  package: PackageName,
  typeInfo: EntityType
};
const AuditType: r.TypeInfo = {
  $id: 'Audit',
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
  id: AuditType.$id,
  package: PackageName,
  typeInfo: AuditType
};
const PersonEntityType: r.TypeInfo = {
  $id: 'PersonEntity',
  allOf: [
    {
      $ref: 'Audit'
    },
    {
      $ref: 'Entity'
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
  id: PersonEntityType.$id,
  package: PackageName,
  typeInfo: PersonEntityType
};

export const IndexModule: r.Module = {
  $id: PackageName,
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
