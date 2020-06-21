import { TestCase } from '../test-case';
import { Person } from './person.model';
import { MetaSchema } from './person.schema';

export const testCase: TestCase<Person> = {
  meta: MetaSchema,
  tree: {
    '@spcy/lib.core.mst-model/Person':
      '{ firstName: string; lastName: string; age: number; isActive: boolean; location: { lat: number; lon: number } }'
  },
  rootType: '@spcy/lib.core.mst-model/Person',
  data: {
    age: 20,
    firstName: 'John',
    lastName: 'Deer',
    isActive: true,
    location: {
      lat: 10,
      lon: 10
    }
  }
};
