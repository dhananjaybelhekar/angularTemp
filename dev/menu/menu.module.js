angular.module('todoApp.menu', ['ui.router','ckeditor','ngCookies','ngResource'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
// $urlRouterProvider.otherwise('/menu');
//   $locationProvider.html5Mode(true);
  $stateProvider.state('menu', {
    url: '/menu',
    //template: '<h1>dfdfsdf</h1>',
	templateUrl: 'public/menu/menu.html',
 	controller:'todoApp.menu.ctrl as todoList'
    })
  	.state('menu.sub', {
    url: '/sub',
	templateUrl: 'public/menu/sub/sub.html',
 	controller:'sub.menu.ctrl as todoList'
    });
});