'use strict';

/**
 * @ngdoc function
 * @name shareMusicApp.controller:formCtrl
 * @description
 * # formCtrl
 * Controller of the shareMusicApp
 */

angular.module('shareMusicApp')
    .controller('formCtrl', function ($scope, videos, genres) {
        $scope.currentVideo = videos.currentVideo;
        $scope.videos = videos.videos;
        $scope.genres = genres.genres;
        $scope.handleLinkFieldChange = function (link, genre) {
            videos.loadYouTubeVideoFromLink(link, genre).then(function (res) {
                $scope.currentVideo = res;
            });
        };
        $scope.handleSubmit = function (iFrameUrl, title, genre, form) {
            videos.postVideo(iFrameUrl, title, genre, form);
            $scope.currentVideo = videos.currentVideo;
        };
    });
