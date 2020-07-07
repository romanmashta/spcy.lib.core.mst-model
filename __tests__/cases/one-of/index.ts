import { TestCase } from '../test-case';
import { Picture } from './index.model';
import { Types } from './index.schema';

export const testCase: TestCase<Picture> = {
  meta: Types,
  rootType: Types.Picture,
  data: {
    figures: [{ side: 10 }, { radius: 20 }, { side: 1 }]
  }
};
