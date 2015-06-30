trainees.controller('addTraineeCtrl', ['$scope', '$location', '$routeParams', 'traineesService', 'mentorsService',
    function ($scope, $location, $routeParams, traineesService, mentorsService) {

        $scope.back = $location;

        mentorsService.getAll(function (res) {
            $scope.mentorCollection = res.data;
        });
        
        $scope.addNewTrainee = function (item) {
            traineesService.add(item, function () {
                $location.path('/trainees');
            });            
        };

}]);