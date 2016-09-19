(function IIFE() {
    'use strict';

    angular.module('appName', [
        'ngRoute',
        'appName.repositories',
        'appName.services',
        'appName.directives',
        'appName.filters',
        'appName.models'
    ]);
    angular.module('appName.repositories', []);
    angular.module('appName.services', []);
    angular.module('appName.directives', []);
    angular.module('appName.filters', []);
    angular.module('appName.models', []);
}());