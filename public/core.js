var valTodo = angular.module('valTodo', []);

function mainController($scope, $http) {
  $scope.formData = {};

  //get and show all todos
  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log(data);
    });

  // on submit add, send text to API
  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .success(function(data) {
        $scope.todos = data;
        console.log('Error: ' + data);
      });
  };
  // delete a todo
  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };
}