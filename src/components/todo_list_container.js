import app from '../app';
import TODOS from '../todos';
import { createTodo, removeItem } from '../actions';

app.directive('todoListContainer', function() {
  return {
    scope: true,
    controllerAs: 'ctrl',
    bindToController: true,
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
