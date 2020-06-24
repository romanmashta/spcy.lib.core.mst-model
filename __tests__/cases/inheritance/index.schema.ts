import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const EntitySchema: TypeInfo = {
  $id: '#/$defs/Entity',
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
  $id: '#/$defs/Audit',
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
  $id: '#/$defs/PersonEntity',
  allOf: [
    {
      $ref: '#/$defs/Audit'
    },
    {
      $ref: '#/$defs/Entity'
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
