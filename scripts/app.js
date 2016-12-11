// Angular Example of setting up controller and calling function
var myApp = angular.module('myApp', []);  //declare a variable so that everything declared inside of it can be accessed trough this variable e.g. add to html attribute so everything within the page can be accessed

myApp.controller('mainController', function($scope) { // declare a controller 
   var employee = {
       firstname: "Sean",
       lastname: "Smith",
       age: "24",
       address: "Tralee"
   };
    $scope.employee = employee;
});

 var Person = function(firstname, lastname) {  // this creates an object
     
    this.firstname = firstname;
    this.lastname = lastname;
}

var searchPeople = function(firstname, lastname, $scope, age)
{
    return 'Joe Bloggs';
}

function logPerson(person){ // create an object of that type
   
    console.log(person);
}
 var john = new Person('John', 'Doe');
logPerson(john); // call the function

console.log(searchPeople); //display as string
console.log(angular.injector().annotate(searchPeople)); // display as array