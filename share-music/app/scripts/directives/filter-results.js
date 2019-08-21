'use strict';

/**
 * @ngdoc directive
 * @name shareMusicApp.directive:filterResults
 * @description
 * # filterResults
 */

angular.module('shareMusicApp')
  .directive('filterResults', function () {
    return {
      restrict: 'E',
      controller: 'filterCtrl',
      templateUrl: 'views/filters.html',
    };
  });