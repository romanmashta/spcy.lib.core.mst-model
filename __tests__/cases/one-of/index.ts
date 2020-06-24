import { TestCase } from '../test-case';
import { Picture } from './index.model';
import { MetaSchema } from './index.schema';

export const testCase: TestCase<Picture> = {
  meta: MetaSchema,
  rootType: MetaSchema.$defs.Picture,
  data: {
    figures: [{ side: 10 }, { radius: 20 }, { side: 1 }]
  }
};
