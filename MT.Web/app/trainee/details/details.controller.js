trainees.controller('detailsTraineeCtrl', ['$scope', '$location', '$routeParams', 'traineesService', 'mentorsService',
    function ($scope, $location, $routeParams, traineesService, mentorsService) {      

        $scope.emailValidate = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        var isNew = !$routeParams.Id;

        $scope.back = function () {
            $location.path('/trainees')
        };

        mentorsService.getAll().then(function (res) {
            $scope.mentorCollection = res.data;
        });

        $scope.save = function () {
            if (isNew) {
                traineesService.add($scope.item).success(function () {
                    $location.path('/trainees');
                });
            } else {
                console.log($scope.item)
                traineesService.edit($routeParams.Id, $scope.item).success(function () {
                    $location.path('/trainees');
                });
            }
        };


        if (isNew) {
            $scope.item = {};
            $scope.setTitle('Trainee Form');
        } else {
            traineesService.getOne($routeParams.Id).then(function (res) {
                $scope.item = res.data;
                $scope.setTitle($scope.item.FirstName + " " + $scope.item.LastName);
            });   
        }

}]);