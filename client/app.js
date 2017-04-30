angular.module('app', [
  'app.createBracket',
  'app.userBracket',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'CreateBracket',
    templateUrl: 'routes/create-bracket.html'
  })
  .when('/user-bracket', {
    controller: 'UserBracket',
    templateUrl: 'routes/user-bracket.html'
  })
  .otherwise({
    redirectTo: '/'
  });
})