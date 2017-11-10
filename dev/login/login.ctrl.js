angular.module('todoApp.login')
.controller('todoApp.login.ctrl', function() {
    var todoList = this;
    todoList.d= 456;
    todoList.load=function(d){
        window.open('/menu');
    }
    console.log('todoApp.login');
});