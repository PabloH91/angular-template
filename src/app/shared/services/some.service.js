(function IIFE() {
    'use strict';

    angular.module('appName.services')
        .service('some.service', someService);

    someService.$inject = ['some.repository'];

    function someService(someRepository) {
        var serviceData = {
            someData: []
        };
        var service = {
            getSomeData: getSomeData,

            data: serviceData
        };

        return service;

        function getSomeData() {
            return someRepository.getSomeData().then(onSuccess, onError);

            function onSuccess(response) {
                serviceData.someData = response.data;
            }
            function onError(error) {
                console.log('error in getSomeData()');
                console.log(error);
            }
        }
    }
}());