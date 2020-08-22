import '@spcy/lib.dev.tasty';
import * as _ from 'lodash';
import * as path from 'path';
import { getSnapshot, IAnyType } from '@spcy/pub.mobx-state-tree';
import { PrototypeInfo, SchemaRepository } from '@spcy/lib.core.reflection';
import * as r from '@spcy/lib.core.reflection';
import { createInstance, ModelRepository } from '../../src';

const ROOT = '__tests__/cases';

SchemaRepository.registerTypes(r.Types);

const assertModel = async (caseName: string) => {
  const caseFile = path.resolve(`${ROOT}/${caseName}/index.ts`);
  const { testCase } = await import(caseFile);

  SchemaRepository.registerTypes(testCase.meta);

  const model = _.reduce(
    testCase.meta,
    (r, m: PrototypeInfo) => ({ ...r, [m.ref.$ref]: ModelRepository.resolve(m.ref) }),
    {}
  );
  const result = _.mapValues(model, (t: IAnyType) => t.describe());

  expect(result).toMatchTastyShot(caseName, `tree`);

  const store = createInstance(testCase.rootType, testCase.data);
  const snap = getSnapshot(store);
  expect(snap).toMatchTastyShot(caseName, `snap`);
  // console.log(JSON.stringify(snap, undefined, 2));
  expect(snap).toEqual(testCase.data);
};

const caseNames = [
  'array',
  'basic-interface',
  'one-of',
  'index-signature',
  // 'meta-schema',
  'inheritance',
  'generics',
  'overrides',
  'reference-set'
];

it.each(caseNames)('Process model %s', async caseName => {
  await assertModel(caseName);
});
