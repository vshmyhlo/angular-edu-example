import TODOS from './todos';
import app from './app';
import { createTodo, removeItem } from './actions';

app.directive('todoListContainer', function() {
  return {
    templateUrl: 'templates/todo_list_container.html',
    controller: ['$scope', function($scope) {
      $scope.todos = TODOS;
      $scope.createTodo = function(newTodo) {
        $scope.todos = createTodo($scope.todos, newTodo);
      };
      $scope.removeItem = function(item) {
        $scope.todos = removeItem($scope.todos, item);
      }
    }]
  };
});

app.directive('todoList', function() {
  return {
    scope: {
      items: '=',
      removeItem: '='
    },
    templateUrl: 'templates/todo_list.html'
  }
});

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

app.directive('todoListForm', function() {
  return {
    scope: {
      'onSubmit': '='
    },
    templateUrl: 'templates/todo_list_form.html',
    controller: ['$scope', function($scope) {
      $scope.newTodo = {};

      $scope.formSubmitted = function(newTodo) {
        $scope.onSubmit(newTodo);
        $scope.newTodo = {};
      }
    }]
  };
});
