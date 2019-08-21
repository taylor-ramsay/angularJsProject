'use strict';

/**
 * @ngdoc overview
 * @name shareMusicApp
 * @description
 * # shareMusicApp
 *
 * Main module of the application.
 */
angular
  .module('shareMusicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/share.html',
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
  })
  .config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.googleapis.com/youtube/**',

      'https://www.youtube.com/**'
    ]);
  });
