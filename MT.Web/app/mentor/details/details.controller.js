mentors.controller('detailsMentorCtrl', ['$scope', '$location', '$routeParams', 'mentorsService',
    function ($scope, $location, $routeParams, mentorsService) {

        $scope.empty = "There is no such user!";
        $scope.back = $location;

        mentorsService.getOne($routeParams.Id, function (res) {
            $scope.mentor = res.data;
        });       

}]);