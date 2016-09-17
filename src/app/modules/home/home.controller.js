(function IIFE() {
    'use strict';

    angular.module('appName')
        .controller('home.controller', homeController);

    homeController.$inject = ['$scope', 'some.service'];

    function homeController($scope, someService) {
        var vm = this;

        // Public functions
        
        // Public variables
        vm.someServiceData = someService.data;

        // Declaration of private functions
        function _init() {
            someService.getSomeData();
        }
        _init();

        // Declaration of public functions
    }
}());