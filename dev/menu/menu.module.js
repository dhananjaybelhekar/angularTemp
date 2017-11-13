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