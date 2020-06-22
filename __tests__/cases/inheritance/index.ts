import { TestCase } from '../test-case';
import { PersonEntity } from './person.model';
import { MetaSchema } from './person.schema';

export const testCase: TestCase<PersonEntity> = {
  meta: MetaSchema,
  tree: {
    '#/$defs/Audit': '{ createdOn: string; updatedOn: string }',
    '#/$defs/Entity': '{ id: string }',
    '#/$defs/PersonEntity':
      '{ createdOn: string; updatedOn: string; id: string; firstName: string; lastName: string; age: (number | undefined?); isActive: (boolean | undefined?) }'
  },
  rootType: MetaSchema.$defs.PersonEntity,
  data: {
    id: '00001',
    lastName: 'Doe',
    firstName: 'John',
    createdOn: 'today',
    updatedOn: 'few minutes ago'
  }
};
