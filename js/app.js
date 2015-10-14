var betweenFriends = angular.module('BetweenFriends', [
  'ngRoute',
  'bfControllers'
]);

betweenFriends.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);