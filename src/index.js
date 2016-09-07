// TODO: Select option generation
// TODO: angular directive controllerAs method context
// TODO: angular directive link function
// TODO: notify angular about changes
// TODO: forms

import app from './app';
import todoListContainer from './components/todo_list_container';
import todoList from './components/todo_list';
import todoItem from './components/todo_item';
import todoListForm from './components/todo_list_form';

import $ from 'jquery'
import _ from 'jquery-ui/ui/widgets/datepicker'

app.controller('appController', ['$scope', '$interval', function($scope, $interval) {
  this.date = new Date((new Date()).getTime() - 1000 * 60 * 60 * 24);
  this.posts = [];
  this.timer = 0;

  $interval(() => {
    this.timer += 1;
  }, 500);

  $.get('http://jsonplaceholder.typicode.com/posts')
    .then(data => {
      $scope.$evalAsync(() => {
        this.posts = data;
      });
    });
}]);

app.directive('datepicker', function() {
  return {
    require: 'ngModel',
    link: function($scope, $elem, $attrs, ngModel) {
      $elem = $($elem);
      $elem.datepicker({
        onSelect: updateDatepicker
      });

      $scope.$watch($attrs.ngModel, function(nv, ov) {
        $elem.datepicker('setDate', nv);
      });

      function updateDatepicker(dateString) {
        const date = new Date(dateString);
        ngModel.$setViewValue(date);
        $elem.blur();
      }
    }
  }
});

app.directive('emailValidator', function() {
  return {
    require: 'ngModel',
    link: function(a, b, c, ngModel) {
      ngModel
        .$asyncValidators
        .emailUniqueness = function(email) {
          return new Promise(function(resolve, reject) {
            setTimeout(function() {
              if (email == 'taken@email') {
                reject('email taken');
              } else {
                resolve(email);
              }
            }, 500);
          });
        };
    }
  }
});
