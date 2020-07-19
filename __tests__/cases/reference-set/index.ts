import { TestCase } from '../test-case';
import { ObjectCollection } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<ObjectCollection> = {
  meta: Types,
  rootType: Types.ObjectCollection,
  data: {
    name: 'test',
    collection: {
      $type: Types.Item.ref,
      $ref: '/collection/tests',
      objects: {
        one: { name: 'one' },
        two: { name: 'two' },
        three: { name: 'three' },
        four: { index: 4 }
      }
    }
  }
};
