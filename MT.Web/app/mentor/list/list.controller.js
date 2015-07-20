mentors.controller('mentorsListCtrl', ['$scope', '$location', '$routeParams', 'mentorsService',
    function ($scope, $location, $routeParams, mentorsService) {

        $scope.setTitle('Mentors');

        mentorsService.getAll().then(function (res) {
            $scope.mentorCollection = res.data;
        });

        $scope.showMentorInfo = function (mentor) {
            $location.path($location.path() + '/' + mentor.Id);
        };

        $scope.navigateToTrainees = function (mentor) {
            $location.path($location.path() + '/' + mentor.Id + '/trainees');
        };

}]);