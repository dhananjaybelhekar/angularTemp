angular.module('todoApp.menu')
.controller('sub.menu.ctrl', function($resource) {
    var todoList = this;
    console.log('sub.menu.ctrl');

    var x= $resource('https://jsonplaceholder.typicode.com/users',{},{get:{method:"GET",isArray:true}});

x.get({}).$promise.then(function(data){
  console.log(data);
})
});