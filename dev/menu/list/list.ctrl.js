angular.module('todoApp.menu')
.controller('list.menu.ctrl', function($resource,DTOptionsBuilder, DTColumnBuilder) {
    var todoList = this;
    console.log('sub.menu.ctrl');
    var x= $resource('https://jsonplaceholder.typicode.com/comments',{},{get:{method:"GET",isArray:true}});
   todoList.dtOptions = DTOptionsBuilder.fromSource(x.get)
        //  .withOption('serverSide', true)
        //   .withOption('processing', true)
        .withPaginationType('full_numbers');
   todoList.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('First name'),
        DTColumnBuilder.newColumn('email').withTitle('email'),
        DTColumnBuilder.newColumn('body').withTitle('Description')
    ];
// x.get({}).$promise.then(function(data){
//   console.log(data);
// })
});