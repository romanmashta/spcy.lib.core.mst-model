import { TestCase } from '../test-case';
import { PersonEntity } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<PersonEntity> = {
  meta: Types,
  rootType: Types.PersonEntity,
  data: {
    id: '00001',
    lastName: 'Doe',
    firstName: 'John',
    createdOn: 'today',
    updatedOn: 'few minutes ago'
  }
};
