import { TestCase } from '../test-case';
import { PersonEntity } from './index.model';
import { MetaSchema } from './index.schema';

export const testCase: TestCase<PersonEntity> = {
  meta: MetaSchema,
  rootType: MetaSchema.$defs.PersonEntity,
  data: {
    id: '00001',
    lastName: 'Doe',
    firstName: 'John',
    createdOn: 'today',
    updatedOn: 'few minutes ago'
  }
};
