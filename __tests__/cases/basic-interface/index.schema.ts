import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const PersonType: r.TypeInfo = {
  $id: 'Person',
  $package: 'lib.core.mst-model',
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

const Person: r.Prototype<m.Person> = {
  $ref: PersonType.$id!,
  $refPackage: PersonType.$package!,
  typeInfo: PersonType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    Person: PersonType
  }
};

export const Types = {
  Person
};
