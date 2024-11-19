var app = angular.module("validationBinding",[]);

app.controller("usersController", function($scope, $http) {
	$http.get("https://jsonplaceholder.typicode.com/users")
  .success(function(result) {
  	$scope.users = result;
  });
  
  $scope.edit = function(u) {
  	$scope.currentUser = u;
  };
});