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
	templateUrl: 'public/menu/sub/sub.html',
 	controller:'sub.menu.ctrl'
    });
});
angular.module('todoApp', [
	'todoApp.login',
	'todoApp.menu',
	'ui.router']).controller('TodoListController', function() {
    var todoList = this;
    console.log('TodoListController');
}).config(function($stateProvider,$urlRouterProvider,$locationProvider) {
$urlRouterProvider.otherwise('/login');
$locationProvider.html5Mode(true);
});