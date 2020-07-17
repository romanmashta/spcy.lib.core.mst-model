import '@spcy/lib.dev.tasty';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { createInstance, getData } from '../../src';
import { Types as ToDoTypes } from './to-do.schema';

SchemaRepository.registerTypes(ToDoTypes);

test('It creates to-do', () => {
  const todo = createInstance(ToDoTypes.RootStorage, {
    todos: [
      { isDone: false, description: 'Item1' },
      { isDone: false, description: 'Item2' },
      { isDone: false, description: 'Item3' }
    ]
  });
  const snap = getData(todo);
  expect(snap).toMatchTastyShot('todo');
});

test('It patch model', () => {
  const tasks = createInstance(ToDoTypes.RootStorage, {
    todos: []
  });
  expect(getData(tasks)).toMatchTastyShot('modified-todo-empty');

  tasks.patch(self => {
    self.todos = [...self.todos, { isDone: false, description: 'Item 1' }];
  });
  expect(getData(tasks)).toMatchTastyShot('modified-todo-not-done');

  tasks.patch(self => {
    self.todos[0].isDone = true;
  });
  expect(getData(tasks)).toMatchTastyShot('modified-todo-done');
});

class ToDoController {}

test('It attach and query controller', () => {});
