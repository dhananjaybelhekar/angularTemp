angular.module('todoApp.login')
.controller('todoApp.login.ctrl', function() {
    var todoList = this;
    todoList.d= 456;
    todoList.load=function(d){
        window.open('/menu','_self')
    }
    console.log('todoApp.login');
});
angular.module('todoApp.menu')
.controller('todoApp.menu.ctrl', function() {
    var todoList = this;
     todoList.options = {
        language: 'en',
        allowedContent: true,
        entities: false
      };
  // Called when the editor is completely ready.
    todoList.onReady = function () {
      console.log("onReady");
    };
    console.log('todoApp.menu.ctrl');
});
angular.module('todoApp.menu')
.controller('sub.menu.ctrl', function() {
    var todoList = this;
    console.log('sub.menu.ctrl');
});