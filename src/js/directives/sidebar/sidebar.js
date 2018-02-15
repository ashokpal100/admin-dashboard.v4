'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('adminApp')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'js/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      }
    }
  }]);
