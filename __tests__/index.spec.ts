import '@spcy/lib.dev.tasty';
import * as _ from 'lodash';
import * as path from 'path';
import { getSnapshot, IAnyType } from '@spcy/pub.mobx-state-tree';
import { SchemaRepository, TypeReference } from '@spcy/lib.core.reflection';
import { createInstance, ModelRepository } from '../src';

const ROOT = '__tests__/cases';

const assertModel = async (caseName: string) => {
  const caseFile = path.resolve(`${ROOT}/${caseName}/index.ts`);
  const { testCase } = await import(caseFile);

  SchemaRepository.registerTypes(testCase.meta);

  const model = _.reduce(testCase.meta, (r, m: TypeReference) => ({ ...r, [m.$ref]: ModelRepository.resolve(m) }), {});
  const result = _.mapValues(model, (t: IAnyType) => t.describe());

  expect(result).toMatchTastyShot(caseName, `tree`);

  const store = createInstance(testCase.rootType, testCase.data);
  const snap = getSnapshot(store);
  expect(snap).toMatchTastyShot(caseName, `snap`);
  // console.log(JSON.stringify(snap, undefined, 2));
  expect(snap).toEqual(testCase.data);
};

const caseNames = ['array', 'basic-interface', 'one-of', 'index-signature', 'meta-schema', 'inheritance'];

it.each(caseNames)('Process model %s', async caseName => {
  await assertModel(caseName);
});
