import { TypeInfo, Module } from '@spcy/lib.core.reflection';

export const PersonSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Person',
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

export const MetaSchema: Module = {
  $defs: {
    Person: PersonSchema
  }
};
