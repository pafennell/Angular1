//Angular nested array
var myApp2 = angular.module("myApp2", [])
.controller("mainController", function($scope) {
    var countries = [
                        {
                            name: "UK",
                            cities: [
                                {name: "Bermingham"},
                                {name: "Bristol"},
                                {name: "london"}
                            ]
                       },
                       {
                            name: "USA",
                            cities: [
                               {name: "Boston"},
                               {name: "New York"},
                               {name: "LA"}
                        ]
                      },

                      {
                        name: "Ireland",
                        cities: [
                                 {name: "Dublic"},
                                 {name: "Galway"},
                                 {name: "Cork"}
                        ]
                    }
            
                  ];
                $scope.countries = countries;
    });