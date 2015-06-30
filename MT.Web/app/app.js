var app = angular.module('app', ['app.mentors', 'app.trainees', 'ngRoute']);
var mentors = angular.module('app.mentors', []);
var trainees = angular.module('app.trainees', []);

app.controller('mainCtrl', function ($scope, $location, $routeParams) {

    $scope.add = function () {
        $scope.addLink = $location.path();
    };

    $scope.$on('$routeChangeStart', function (next, current) {
        if($location.path() == "/mentors")
        {
            $scope.title = "Mentors";
        }
        else {
            $scope.title = "Trainees"
        }
    })

});



app.config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when("/mentors", {
            templateUrl: "app/mentor/list/mentors-list.html",
            controller: "mentorsListCtrl"
        })
        .when("/mentors/add", {
            templateUrl: "app/mentor/add/mentor-add.html",
            controller: "addMentorCtrl"
        })
        .when("/mentors/:Id", {
            templateUrl: "app/mentor/details/mentor-details.html",
            controller: "detailsMentorCtrl"
        })
        .when("/trainees", {
            templateUrl: "app/trainee/list/trainees-list.html",
            controller: "traineesListCtrl"
        })
        .when("/trainees/add", {
            templateUrl: "app/trainee/add/trainee-add.html",
            controller: "addTraineeCtrl"
        })
        .when("/trainees/:Id", {
            templateUrl: "app/trainee/details/trainee-details.html",
            controller: "detailsTraineeCtrl"
        })
        .otherwise({redirectTo: "/mentors"})

});
