import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const PersonSchema: TypeInfo = {
  $id: '#/$defs/Person',
  type: 'object',
  required: ['firstName', 'lastName', 'age', 'isActive', 'location'],
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
    },
    location: {
      type: 'object',
      required: ['lat', 'lon'],
      properties: {
        lat: {
          type: 'number'
        },
        lon: {
          type: 'number'
        }
      }
    }
  }
};

SchemaRepository.register(PersonSchema);

export const MetaSchema: Module = {
  $defs: {
    Person: PersonSchema
  }
};
