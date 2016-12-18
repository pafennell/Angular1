//<reference path="angular.js />
var myApp = angular.module("myApp", [])
.controller("mainController", function ($scope) {
    var employees = [
        { name: "Ben", dateOfBirth: new Date("Novenber 23, 1980"), gender: "Male", salery: 5500.78 },
        { name: "Sara", dateOfBirth: new Date("May 5, 1970"), gender: "Female", salery: 68000 },
        { name: "Mark", dateOfBirth: new Date("Augest 15, 1874"), gender: "Male", salery: 57000 },
        { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salery: 53000 },
        { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salery: 60000 }
    ];

    $scope.employees = employees;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;


    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? "arrow-down" : "arrow-up";
        }

        return '';
    }

});