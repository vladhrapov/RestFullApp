trainees.service('traineesService', ['$http',
    function ($http) {

    this.getAll = function (callback) {
        $http.get('/api/trainees').then(callback);
    };

    this.getOne = function (id, callback) {
        $http.get('/api/trainees/' + id).then(callback);
    };

    this.add = function (item) {
        $http.post('/api/trainees/', item);
    };

    this.edit = function (item) {
        //$http.put('some route', item)
    };

}]);