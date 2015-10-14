var bfControllers = angular.module('bfControllers', []);

bfControllers.controller('HomeCtrl', ['$scope',
  function ($scope, $http) {
    $scope.testProperty = 'Hello World';
  }]);

// Make use of $http service to call google or yelp api
bfControllers.controller('FindFriendCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams) {

  }]);