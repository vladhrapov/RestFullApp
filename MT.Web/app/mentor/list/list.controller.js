mentors.controller('mentorsListCtrl', ['$scope', '$location', '$routeParams', 'mentorsService',
    function ($scope, $location, $routeParams, mentorsService) {

    mentorsService.getAll(function (res) {
        $scope.mentorCollection = res.data;
    });

    $scope.currentPath = $location;

}]);