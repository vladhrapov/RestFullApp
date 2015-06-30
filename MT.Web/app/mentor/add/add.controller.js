mentors.controller('addMentorCtrl', ['$scope', '$location', '$routeParams', 'mentorsService',
    function ($scope, $location, $routeParams, mentorsService) {

        $scope.back = $location;
        
        $scope.addNewMentor = function (item) {
            mentorsService.add(item);
            $location.path('/mentors');
        };
    }]);