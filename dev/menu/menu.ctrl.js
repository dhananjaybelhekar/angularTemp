angular.module('todoApp.menu')
.controller('todoApp.menu.ctrl', function($scope,$cookieStore) {
    var todoList = this;

      $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

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