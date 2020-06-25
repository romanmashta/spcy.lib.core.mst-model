import '@spcy/lib.dev.tasty';
import * as _ from 'lodash';
import * as path from 'path';
import { getSnapshot, IAnyType } from '@spcy/pub.mobx-state-tree';
import { ModelRepository } from '../src';

const ROOT = '__tests__/cases';

const assertModel = async (caseName: string) => {
  const caseFile = path.resolve(`${ROOT}/${caseName}/index.ts`);
  const { testCase } = await import(caseFile);

  const model = _.reduce(testCase.meta.$defs, (r, m) => ({ ...r, [m.$id]: ModelRepository.resolve(m.$id) }), {});
  const result = _.mapValues(model, (t: IAnyType) => t.describe());

  expect(result).toMatchTastyShot(caseName, `tree`);

  const rootModel = ModelRepository.resolve(testCase.rootType.$id);

  const store = rootModel.create(testCase.data);
  const snap = getSnapshot(store);
  expect(snap).toMatchTastyShot(caseName, `snap`);
  // console.log(JSON.stringify(snap, undefined, 2));
  expect(snap).toEqual(testCase.data);
};

const caseNames = ['array', 'basic-interface', 'one-of', 'index-signature', 'meta-schema', 'inheritance'];

it.each(caseNames)('Process model %s', async caseName => {
  await assertModel(caseName);
});
