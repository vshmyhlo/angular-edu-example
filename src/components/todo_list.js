import app from '../app';

app.directive('todoList', function() {
  return {
    scope: {
      items: '=',
      removeItem: '='
    },
    templateUrl: 'templates/todo_list.html'
  }
});
