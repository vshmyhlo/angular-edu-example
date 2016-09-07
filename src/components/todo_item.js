import app from '../app';

app.directive('todoItem', function() {
  return {
    replace: true,
    scope: {
      'item': '=',
      'removeItem': '='
    },
    templateUrl: 'templates/todo_list_item.html'
  }
});
