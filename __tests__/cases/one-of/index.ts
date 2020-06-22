import { TestCase } from '../test-case';
import { MetaSchema } from './shapes.schema';
import { Picture } from './shapes.model';

export const testCase: TestCase<Picture> = {
  meta: MetaSchema,
  tree: {
    '@spcy/lib.core.mst-model/Circle': '{ radius: number }',
    '@spcy/lib.core.mst-model/Picture':
      '{ figures: (late(function () { return _this.resolver.resolve(def.$ref); }) | late(function () { return _this.resolver.resolve(def.$ref); }))[] }',
    '@spcy/lib.core.mst-model/Shapes': '(@spcy/lib.core.mst-model/Circle | @spcy/lib.core.mst-model/Square)',
    '@spcy/lib.core.mst-model/Square': '{ side: number }'
  },
  rootType: MetaSchema.$defs.Picture,
  data: {
    figures: [{ side: 10 }, { radius: 20 }, { side: 1 }]
  }
};
