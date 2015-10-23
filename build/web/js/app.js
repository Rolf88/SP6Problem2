var app = angular.module('viewApp', ['ngRoute']);
// Route Provider Start
app.config(function ($routeProvider) {
    $routeProvider
            .when("/Person", {
                templateUrl: "views/Person.html",
                controller: "ViewController"
            })
            .when("/info/:index", {
                templateUrl: "views/PersonDetails.html",
                controller: "ViewController"
            })
            .when("/AddPerson", {
                templateUrl: "views/AddPerson.html",
                controller: "ViewController"
            })
            .otherwise({
                redirectTo: "/Person"
            });
});

// Route Provider End

// Controllers Start
app.controller('ViewController', function ($scope, $routeParams) {
    $scope.products = "Our Products";
    $scope.uid = 4;
    $scope.persons = [
        {details: 0, name: "Hanne", age: 25},
        {details: 1, name: "Per", age: 28},
        {details: 2, name: "Svend", age: 35},
        {details: 3, name: "Gudrund", age: 45}
    ];

    if (angular.isDefined($routeParams.index)) {
        var i = $routeParams.index;
        $scope.person = $scope.persons[i];
    }

    $scope.save = function () {
        if ($scope.newperson.details == null) {
            $scope.newperson.details = $scope.uid++;
            $scope.persons.push($scope.newperson);
        } else {
            for (var i in $scope.persons) {
                if ($scope.persons[i].details == $scope.newperson.details) {
                    $scope.persons[i] = $scope.newperson;
                }
            }
        }
        $scope.newperson = {};
    };
});