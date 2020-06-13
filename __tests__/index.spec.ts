import { getSnapshot, Instance, types } from 'mobx-state-tree';

import { sayHi, sayBye } from '../src';

const BasicTypes = types.union(types.literal('boolean'), types.literal('number'), types.literal('string'));

const TypeInfo = types.union(BasicTypes);

const TypeLiteral = types.model('TypeLiteral', {
  properties: types.map(TypeInfo),
});

test('It says Hi', () => {
  const i = {
    properties: {
      firstName: 'string',
      lastName: 'string',
      age: 'number',
      isActive: 'boolean',
    },
  };

  const x = TypeLiteral.create(i);
  console.log(getSnapshot(x));
});

test('It says Bye', () => {
  expect(sayBye('Me')).toBe('Bye Me');
});
