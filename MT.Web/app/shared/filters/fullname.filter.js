app.filter('fullname', [
    function () {
        return function (person, isFullName) {
            if (isFullName) {
                return person.LastName + " " + person.FirstName + " " + person.MiddleName;
            }
            else {
                return person.LastName + " " + person.FirstName;
            }            
        };        
}]);