angular.module('todoApp.login', ['ui.router'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  // $locationProvider.html5Mode(true);
  // $urlRouterProvider.otherwise('/login');
  $stateProvider.state('login', {
    url: '/login',
	templateUrl: 'public/login/login.html',
  	controller:'todoApp.login.ctrl as todoList'
    });

});
angular.module('todoApp.menu', ['ui.router','ckeditor','ngCookies','ngResource','datatables'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
// $urlRouterProvider.otherwise('/menu');
//   $locationProvider.html5Mode(true);
  $stateProvider.state('menu', {
      url: '/menu',
      templateUrl: 'public/menu/menu.html',
      controller:'todoApp.menu.ctrl as todoList'
    })
  	.state('menu.sub', {
      url: '/sub',
      templateUrl: 'public/menu/sub/sub.html',
      controller:'sub.menu.ctrl as todoList'
    })
    .state('menu.list', {
      url: '/list',
	    templateUrl: 'public/menu/list/list.html',
 	    controller:'list.menu.ctrl as todoList'
    });
});
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