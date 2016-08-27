import _ from 'lodash';

function createTodo(todos, newTodo) {
  todos.push(newTodo);
  return todos;
}

function removeItem(todos, item) {
  return _.without(todos, item);
}

export { createTodo, removeItem };
