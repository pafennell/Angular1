var myApp = angular.module("myApp" , [])
.controller("mainController", function($scope){
    var technologies = [
                        {name:"C#", likes:0, dislikes:0},
                        {name:"Sql Server", likes:0, dislikes:0},
                        {name:"Angular", likes:0, dislikes:0},
                        {name:"Asp.Net", likes:0, dislikes:0}
                       ];
    $scope.technologies = technologies;
    
    $scope.technologieLikes = function(technology){
        technology.likes++;
    }
    
    $scope.technologieDislikes = function(technology){
        technology.dislikes++;
    }
});