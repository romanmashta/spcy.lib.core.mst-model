import { TestCase } from '../test-case';
import { Person } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<Person> = {
  meta: Types,
  rootType: Types.Person,
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
