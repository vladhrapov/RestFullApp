mentors.service('mentorsService', ['$http',
    function ($http) {

    this.getAll = function () {
        return $http.get('/api/mentors');
    };

    this.getOne = function (id) {
        return $http.get('/api/mentors/' + id);
    };

    this.add = function (item) {
        return $http.post('/api/mentors/', item);
    };

    this.edit = function (id, item) {
        return $http.put('/api/mentors/' + id, item)
    };

}]);