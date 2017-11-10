angular.module('todoApp.login', ['ui.router'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  // $locationProvider.html5Mode(true);
  // $urlRouterProvider.otherwise('/login');
  $stateProvider.state('login', {
    url: '/login',
	templateUrl: 'public/login/login.html',
  	controller:'todoApp.login.ctrl'
    });

});