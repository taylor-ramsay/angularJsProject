'use strict';

/**
 * @ngdoc overview
 * @name shareMusicApp
 * @description
 * # shareMusicApp
 *
 * Main module of the application.
 */
var shareMusicApp = angular
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/share', {
        templateUrl: 'views/share.html',
        controller: 'ShareCtrl',
        controllerAs: 'share'
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
      'http://localhost:5000/**',
      'https://www.youtube.com/**'
    ]);
  });
