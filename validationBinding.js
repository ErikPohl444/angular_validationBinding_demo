var app = angular.module("validationBinding",[]);

app.controller("usersController", function($scope, $http) {
	$http.get("https://jsonplaceholder.typicode.com/users")
  .success(function(result) {
  	$scope.users = result;
  });
  
  $scope.editedUser = {name:""};
  
  $scope.save = function(u) {
  	$scope.currentUser.name = u.name;
  }
  
  $scope.edit = function(u) {
  	$scope.currentUser = u;
    $scope.editedUser.name = u.name;
  };
});