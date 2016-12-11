//Angular Array
var myApp = angular.module('myApp', [])
.controller('mainController', function($scope) { // declare a controller 
   var employees = [{ firstname: "Sean", lastname: "Smith", age: "24", address: "Tralee"},
                   { firstname: "Keira", lastname: "Jones", age: "28", address: "Listowel"},
                   { firstname: "Sarah", lastname: "Foley", age: "26", address: "Castleisland"},
                   { firstname: "Chloe", lastname: "Farley", age: "30", address: "Anbbeyfeale"}
   ];
    $scope.employees = employees;
});
