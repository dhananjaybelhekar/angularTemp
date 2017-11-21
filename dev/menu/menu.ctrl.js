angular.module('todoApp.menu')
.controller('todoApp.menu.ctrl', function($scope,$cookieStore,$resource) {
    var todoList = this;


var x= $resource('https://jsonplaceholder.typicode.com/posts',{},{get:{method:"GET",isArray:true}});

x.get({}).$promise.then(function(data){
  console.log(data);
})
      $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

     todoList.options = {
        language: 'en',
        allowedContent: true,
        fullPage: true,
        entities: false
      };
  // Called when the editor is completely ready.
    todoList.onReady = function () {
      console.log("onReady");
    };
    console.log('todoApp.menu.ctrl');
});