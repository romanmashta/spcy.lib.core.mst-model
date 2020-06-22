import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const EntitySchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Entity',
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'string'
    }
  }
};
SchemaRepository.register(EntitySchema);

export const AuditSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Audit',
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
SchemaRepository.register(AuditSchema);

export const PersonEntitySchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/PersonEntity',
  allOf: [
    {
      $ref: '@spcy/lib.core.mst-model/Audit'
    },
    {
      $ref: '@spcy/lib.core.mst-model/Entity'
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
SchemaRepository.register(PersonEntitySchema);

export const MetaSchema: Module = {
  $defs: {
    Entity: EntitySchema,
    Audit: AuditSchema,
    PersonEntity: PersonEntitySchema
  }
};
