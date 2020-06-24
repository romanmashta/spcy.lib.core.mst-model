import { TestCase } from '../test-case';
import { Person } from './index.model';
import { MetaSchema } from './index.schema';

export const testCase: TestCase<Person> = {
  meta: MetaSchema,
  rootType: MetaSchema.$defs.Person,
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
