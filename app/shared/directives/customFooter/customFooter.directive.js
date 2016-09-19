(function IIFE() {
    'use strict';

    angular.module('appName.directives')
        .directive('customFooter', customFooterDirective);

    customFooterDirective.$inject = [];

    function customFooterDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/customFooter/customFooter.template.html',
            link: postLink
        };

        function postLink(scope, iElement, iAttrs) {
            scope.currentYear = new Date().getFullYear();
        }
    }
}());