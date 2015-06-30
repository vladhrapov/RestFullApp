mentors.service('mentorsService', ['$http',
    function ($http) {

    this.getAll = function (callback) {
        $http.get('/api/mentors').then(callback);
    };

    this.getOne = function (id, callback) {
        $http.get('/api/mentors/' + id).then(callback);
    };

    this.add = function (item, callback) {
        $http.post('/api/mentors/', item).success(callback);
    };

    this.edit = function (item) {
        //$http.put('route', item)
    };

}]);