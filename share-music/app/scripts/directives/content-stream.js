'use strict';

/**
 * @ngdoc directive
 * @name shareMusicApp.directive:contentStream
 * @description
 * # contentStream
 */

angular.module('shareMusicApp')
  .directive('contentStream', function () {
    return {
      restrict: 'E',
      controller: 'contentCtrl',
      templateUrl: 'views/content.html',
    };
  });