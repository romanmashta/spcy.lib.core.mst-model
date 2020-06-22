import * as _ from 'lodash';
import { resolve } from 'path';
import { getSnapshot, IAnyType } from '@spcy/pub.mobx-state-tree';
import { ModelRepository } from '../src';

const ROOT = '__tests__/cases';

const assertModel = (caseName: string) => {
  const caseFile = resolve(`${ROOT}/${caseName}/index.ts`);
  const { testCase } = require(caseFile);

  const model = _.reduce(testCase.meta.$defs, (r, m) => ({ ...r, [m.$id]: ModelRepository.resolve(m.$id) }), {});
  const expected = testCase.tree;
  const result = _.mapValues(model, (t: IAnyType) => t.describe());
  expect(expected).toEqual(result);

  const rootModel = ModelRepository.resolve(testCase.rootType.$id);

  const store = rootModel.create(testCase.data);
  const snap = getSnapshot(store);
  // console.log(JSON.stringify(snap, undefined, 2));
  expect(snap).toEqual(testCase.data);
};

const caseNames = ['array', 'basic-interface', 'one-of', 'index-signature', 'meta-schema', 'inheritance'];

it.each(caseNames)('Process model %s', caseName => {
  assertModel(caseName);
});
