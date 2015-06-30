trainees.controller('traineesListCtrl', ['$scope', '$location', 'traineesService',
    function ($scope, $location, traineesService) {

    traineesService.getAll(function (res) {
        $scope.traineeCollection = res.data;
    });

    $scope.currentPath = $location;

}]);