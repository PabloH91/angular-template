(function IIFE() {
    'use strict';

    angular.module('appName.repositories')
        .factory('some.repository', someRepository);

    someRepository.$inject = ['$http'];

    function someRepository($http) {
        var repo = {
            getSomeData: getSomeData
        };
        return repo;

        function getSomeData() {
            return $http({
                method: 'GET'
            });
        }
    }
}());