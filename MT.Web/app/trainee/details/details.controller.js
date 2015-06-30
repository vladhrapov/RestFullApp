trainees.controller('detailsTraineeCtrl', ['$scope', '$location', '$routeParams', 'traineesService',
    function ($scope, $location, $routeParams, traineesService) {

        $scope.empty = "There is no such user!";
        $scope.back = $location;

        traineesService.getOne($routeParams.Id, function (res) {
            $scope.trainee = res.data;
        });    

}]);