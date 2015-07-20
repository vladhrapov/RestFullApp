mentors.controller('detailsMentorCtrl', ['$scope', '$location', '$routeParams', 'mentorsService',
    function ($scope, $location, $routeParams, mentorsService) {

        $scope.emailValidate = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        var isNew = !$routeParams.Id;
        
        $scope.back = function () {
            $location.path('/mentors');
        };
        
        $scope.save = function () {
            if (isNew) {
                mentorsService.add($scope.item).success(function () {
                    $location.path('/mentors');
                });
            } else {
                mentorsService.edit($routeParams.Id, $scope.item).success(function () {
                    $location.path('/mentors');
                });
            }
        };

        if (isNew) {
            $scope.item = {};
            $scope.setTitle('Mentor Form');
        } else {
            mentorsService.getOne($routeParams.Id).then(function (res) {
                $scope.item = res.data;
                $scope.setTitle($scope.item.FirstName + " " + $scope.item.LastName);
            });
        }
    }]);