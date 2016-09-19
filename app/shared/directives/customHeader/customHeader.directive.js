(function IIFE() {
    'use strict';

    angular.module('appName.directives')
        .directive('customHeader', customHeaderDirective);

    customHeaderDirective.$inject = [];

    function customHeaderDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/customHeader/customHeader.template.html'
        };
    }
}());