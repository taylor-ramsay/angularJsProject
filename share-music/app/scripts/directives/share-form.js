'use strict';

/**
 * @ngdoc directive
 * @name shareMusicApp.directive:shareForm
 * @description
 * # shareForm
 */

angular.module('shareMusicApp')
  .directive('shareForm', function () {
    return {
      restrict: 'E',
      controller: 'formCtrl',
      templateUrl: 'views/form.html',
    };
  });