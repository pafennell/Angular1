//<reference path="angular.js />
var myApp = angular.module("myApp", [])
.controller("mainController", function ($scope) {
    var employees = [
        { name: "Ben", dateOfBirth: new Date("Novenber 23, 1980"), gender: "Male", city: "London", salery: 5500.78 },
        { name: "Sara", dateOfBirth: new Date("May 5, 1970"), gender: "Female", city: "Paris", salery: 68000 },
        { name: "Mark", dateOfBirth: new Date("Augest 15, 1874"), gender: "Male", city: "Dublin", salery: 5700 },
        { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Femalve", city: "New York", salery: 53000 },
        { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", city: "Galway",  salery: 60000 }
    ];

    $scope.employees = employees;
  
});