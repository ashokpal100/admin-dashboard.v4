'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('adminApp')
	.directive('header',function(){
		return {
            templateUrl:'js/directives/header/header.html',
            restrict: 'E',
            replace: true,
    }
});