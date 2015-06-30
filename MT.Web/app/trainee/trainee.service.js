trainees.service('traineesService', ['$http',
    function ($http) {

    this.getAll = function (callback) {
        $http.get('/api/trainees').then(callback);
    };

    this.getOne = function (id, callback) {
        $http.get('/api/trainees/' + id).then(callback);
    };

    this.add = function (item, callback) {
        $http.post('/api/trainees/', item).success(callback);
    };

    this.edit = function (item) {
        //$http.put('some route', item)
    };

}]);