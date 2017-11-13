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