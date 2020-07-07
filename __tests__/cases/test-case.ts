import { Prototype, Prototypes } from '@spcy/lib.core.reflection';

export interface TestCase<T> {
  meta: Prototypes;
  rootType: Prototype<T>;
  data?: T;
}
