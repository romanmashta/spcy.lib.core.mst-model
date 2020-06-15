import _ from 'lodash';
import { resolve } from 'path';
import { buildModule } from '../src';

const ROOT = '__tests__/cases';

const assertModel = (caseName: string) => {
  const caseFile = resolve(`${ROOT}/${caseName}.ts`);
  const { testCase } = require(caseFile);

  const model = buildModule(testCase.meta);
  const expected = testCase.tree;
  const result = _.mapValues(model, t => t.describe());
  expect(expected).toEqual(result);
};

const caseNames = ['array', 'basic-interface', 'one-of', 'index-signature'];

it.each(caseNames)('Process model %s', caseName => {
  assertModel(caseName);
});
