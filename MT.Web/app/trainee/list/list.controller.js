trainees.controller('traineesListCtrl', ['$scope', '$location', '$routeParams', 'traineesService', 'mentorsService',
    function ($scope, $location, $routeParams, traineesService, mentorsService) {
        
        if ($location.path() == '/trainees') {
            $scope.setTitle('Trainees');
            $scope.showMentor = true;
            traineesService.getAll().then(function (res) {
                $scope.traineeCollection = res.data;
            });
        }
        else {
            $scope.showMentor = false;
            mentorsService.getOne($routeParams.Id).then(function (res) {              
                $scope.traineeCollection = res.data.Trainees;
                $scope.setTitle(res.data.FirstName + " " + res.data.LastName + '`s Trainees');
            });
            
        }

        $scope.showTraineeInfo = function (trainee) {
            $location.path($location.path() + '/' + trainee.Id);
        };
}]);