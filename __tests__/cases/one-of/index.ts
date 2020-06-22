import { TestCase } from '../test-case';
import { MetaSchema } from './shapes.schema';
import { Picture } from './shapes.model';

export const testCase: TestCase<Picture> = {
  meta: MetaSchema,
  tree: {
    '#/$defs/Circle': '{ radius: number }',
    '#/$defs/Picture':
      '{ figures: (late(function () { return _this.resolver.resolve(def.$ref); }) | late(function () { return _this.resolver.resolve(def.$ref); }))[] }',
    '#/$defs/Shapes': '(#/$defs/Circle | #/$defs/Square)',
    '#/$defs/Square': '{ side: number }'
  },
  rootType: MetaSchema.$defs.Picture,
  data: {
    figures: [{ side: 10 }, { radius: 20 }, { side: 1 }]
  }
};
