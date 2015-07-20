//(function () {
    var app = angular.module('app', ['app.mentors', 'app.trainees', 'ngRoute']);
    var mentors = angular.module('app.mentors', []);
    var trainees = angular.module('app.trainees', []);

    app.controller('mainCtrl', ['$scope', '$location', '$routeParams',
        function ($scope, $location, $routeParams) {

            $scope.add = function () {
                $scope.addLink = $location.path();
            };

            $scope.setTitle = function (title) {
                $scope.title = title;
            };

            $scope.navigateTo = function (path) {
                $location.path(path);
            };

        }]);



    app.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            //$locationProvider.html5Mode(true);

            $routeProvider
                .when("/mentors", {
                    templateUrl: "app/mentor/list/mentors-list.html",
                    controller: "mentorsListCtrl"
                })
                .when("/mentors/add", {
                    templateUrl: "app/mentor/details/mentor-details.html",
                    controller: "detailsMentorCtrl"
                })
                .when("/mentors/:Id", {
                    templateUrl: "app/mentor/details/mentor-details.html",
                    controller: "detailsMentorCtrl"
                })
                .when("/mentors/:Id/trainees", {
                    templateUrl: "app/trainee/list/trainees-list.html",
                    controller: "traineesListCtrl"
                })
                .when("/trainees", {
                    templateUrl: "app/trainee/list/trainees-list.html",
                    controller: "traineesListCtrl"
                })
                .when("/trainees/add", {
                    templateUrl: "app/trainee/details/trainee-details.html",
                    controller: "detailsTraineeCtrl"
                })
                .when("/trainees/:Id", {
                    templateUrl: "app/trainee/details/trainee-details.html",
                    controller: "detailsTraineeCtrl"
                })
                .otherwise({ redirectTo: "/mentors" });

        }]);
//})();