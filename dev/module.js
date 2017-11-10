angular.module('todoApp', [
	'todoApp.login',
	'todoApp.menu',
	'ui.router']).controller('TodoListController', function() {
    var vm = this;
    console.log('TodoListController');
}).config(function($stateProvider,$urlRouterProvider,$locationProvider) {
$urlRouterProvider.otherwise('/login');
$locationProvider.html5Mode(true);
});