(function IIFE() {
    'use strict';

    angular.module('appName')
        .config(['$routeProvider', configFn]);

    function configFn($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: ('app/modules/home/home.html'),
                controller: 'home.controller',
                controllerAs: 'homeCtrl'
            })
            .otherwise({
                templateUrl: ('app/shared/views/404.html'),
            });
    }
}());