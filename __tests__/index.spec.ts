import * as _ from 'lodash';
import * as path from 'path';
import { getSnapshot, IAnyType } from '@spcy/pub.mobx-state-tree';
import { addSerializer } from 'jest-specific-snapshot';
import { ModelRepository } from '../src';

addSerializer({
  test: () => true,
  print: (object: any) => JSON.stringify(object, undefined, 2)
});

const SNAPSHOTS_ROOT = '__snapshots__';
const ROOT = '__tests__/cases';

const assertModel = (caseName: string) => {
  const caseFile = path.resolve(`${ROOT}/${caseName}/index.ts`);
  const { testCase } = require(caseFile);

  const model = _.reduce(testCase.meta.$defs, (r, m) => ({ ...r, [m.$id]: ModelRepository.resolve(m.$id) }), {});
  const result = _.mapValues(model, (t: IAnyType) => t.describe());

  expect(result).toMatchSpecificSnapshot(path.join(SNAPSHOTS_ROOT, caseName, `tree.shot`));

  const rootModel = ModelRepository.resolve(testCase.rootType.$id);

  const store = rootModel.create(testCase.data);
  const snap = getSnapshot(store);
  expect(snap).toMatchSpecificSnapshot(path.join(SNAPSHOTS_ROOT, caseName, `snap.shot`));
  // console.log(JSON.stringify(snap, undefined, 2));
  expect(snap).toEqual(testCase.data);
};

const caseNames = ['array', 'basic-interface', 'one-of', 'index-signature', 'meta-schema', 'inheritance'];

it.each(caseNames)('Process model %s', caseName => {
  assertModel(caseName);
});
