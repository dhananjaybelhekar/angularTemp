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