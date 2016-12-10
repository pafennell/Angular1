var myApp = angular.module('myApp', []);  //declare a variable so that everything declared inside of it can be accessed trough this variable e.g. add to html attribute so everything within the page can be accessed

myApp.controller('mainController', function($scope) { // declare a controller 
   console.log($scope);
    
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

console.log(searchPeople);
console.log(angular.injector().annotate(searchPeople)); // display as array