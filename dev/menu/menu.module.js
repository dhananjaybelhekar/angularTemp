angular.module('todoApp.menu', ['ui.router','ckeditor'])
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
// $urlRouterProvider.otherwise('/menu');
//   $locationProvider.html5Mode(true);
  $stateProvider.state('menu', {
    url: '/menu',
    //template: '<h1>dfdfsdf</h1>',
	templateUrl: 'public/menu/menu.html',
 	controller:'todoApp.menu.ctrl'
    })
  	.state('menu.sub', {
    url: '/sub',
	templateUrl: 'public/sub/sub.html',
 	controller:'sub.menu.ctrl'
    });
});