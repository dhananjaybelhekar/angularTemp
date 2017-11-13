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
        entities: false
      };
  // Called when the editor is completely ready.
    todoList.onReady = function () {
      console.log("onReady");
    };
    console.log('todoApp.menu.ctrl');
});
angular.module('todoApp.menu')
.controller('list.menu.ctrl', function($resource,DTOptionsBuilder, DTColumnBuilder) {
    var todoList = this;
    console.log('sub.menu.ctrl');
    var x= $resource('https://jsonplaceholder.typicode.com/users',{},{get:{method:"GET",isArray:true}});
   todoList.dtOptions = DTOptionsBuilder.fromSource(x.get)
        .withPaginationType('full_numbers');
   todoList.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('First name'),
        DTColumnBuilder.newColumn('email').withTitle('email')
    ];
// x.get({}).$promise.then(function(data){
//   console.log(data);
// })
});
angular.module('todoApp.menu')
.controller('sub.menu.ctrl', function($resource,DTOptionsBuilder, DTColumnBuilder) {
    var todoList = this;
    console.log('sub.menu.ctrl');
});