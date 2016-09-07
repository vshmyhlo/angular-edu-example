import app from '../app';

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
