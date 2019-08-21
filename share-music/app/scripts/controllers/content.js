'use strict';

/**
 * @ngdoc function
 * @name shareMusicApp.controller:contentCtrl
 * @description
 * # contentCtrl
 * Controller of the shareMusicApp
 */
angular.module('shareMusicApp')
    .controller('contentCtrl', function ($scope, videos, filters) {
        $scope.filterByGenre = filters.filterByGenre;
        $scope.upVote = function (video) {
            videos.upVote(video);
        };
        $scope.downVote = function (video) {
            videos.downVote(video);
        };
    });