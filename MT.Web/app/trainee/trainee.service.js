trainees.service('traineesService', ['$http',
    function ($http) {

    this.getAll = function () {
        return $http.get('/api/trainees');
    };

    this.getOne = function (id) {
        return $http.get('/api/trainees/' + id);
    };

    this.add = function (item) {
        return $http.post('/api/trainees/', item);
    };

    this.edit = function (id, item) {
        return $http.put('/api/trainees/' + id, item)
    };


    var singleton = function () {

        if (!singleton.instance)
            singleton.instance = {};

        singleton.instance.conter = 1;

        singleton.instance.increment = function () {
            singleton.instance.counter += 1;
        };

        return singleton.instance;
    };

    new singleton().increment(); //1
    new singleton().increment(); //2


    var singleton = (function () {

        var instance = {};

        return function () {
            instance.conter = 1;

            instance.increment = function () {
                instance.counter += 1;
            };

            return instance;
        };

    }());

    new singleton().increment(); //1
    new singleton().increment(); //2

}]);