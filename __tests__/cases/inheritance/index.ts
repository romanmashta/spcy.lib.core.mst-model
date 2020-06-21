import { TestCase } from '../test-case';
import { Person } from './person.model';
import { MetaSchema } from './person.schema';

export const testCase: TestCase<Person> = {
  meta: MetaSchema,
  tree: {
    '@spcy/lib.core.mst-model/Audit': '{ createdOn: string; updatedOn: string }',
    '@spcy/lib.core.mst-model/Entity': '{ id: string }',
    '@spcy/lib.core.mst-model/Person':
      '{ createdOn: string; updatedOn: string; id: string; firstName: string; lastName: string; age: (number | undefined?); isActive: (boolean | undefined?) }'
  },
  rootType: '@spcy/lib.core.mst-model/Person',
  data: {
    id: '00001',
    lastName: 'Doe',
    firstName: 'John',
    createdOn: 'today',
    updatedOn: 'few minutes ago'
  }
};
