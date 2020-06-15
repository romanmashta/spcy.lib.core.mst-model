import _ from 'lodash';
import { resolve } from 'path';
import { buildModule } from '../src';
import { getSnapshot } from '@spcy/pub.mobx-state-tree';

const ROOT = '__tests__/cases';

const assertModel = (caseName: string) => {
  const caseFile = resolve(`${ROOT}/${caseName}.ts`);
  const { testCase } = require(caseFile);

  const model = buildModule(testCase.meta);
  const expected = testCase.tree;
  const result = _.mapValues(model, t => t.describe());
  expect(expected).toEqual(result);

  const rootType = _.get(model, testCase.rootType);
  const store = rootType.create(testCase.data);
  const snap = getSnapshot(store);
  //console.log(JSON.stringify(snap, undefined, 2));
  expect(snap).toEqual(testCase.data);
};

const caseNames = ['array', 'basic-interface', 'one-of', 'index-signature', 'meta-schema'];

it.each(caseNames)('Process model %s', caseName => {
  assertModel(caseName);
});
