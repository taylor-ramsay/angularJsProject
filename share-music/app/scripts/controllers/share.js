'use strict';

/**
 * @ngdoc function
 * @name shareMusicApp.controller:ShareCtrl
 * @description
 * # ShareCtrl
 * Controller of the shareMusicApp
 */
// AIzaSyAe4SmDokP6G1prbOebnshJo1ujvqhKJL0

angular.module('shareMusicApp')
    .controller('ShareCtrl', function ($scope, videoData) {
        $scope.sharedLink = '';
        $scope.loadYouTubeVideoFromLink = function (link) {
            var videoId = videoData.getIdFromUrl(link);
            videoData.getMetaData(videoId).then(function (res) {
                var result = res.data.items[0];
                if (result) {
                    $scope.iFrameUrl = 'https://www.youtube.com/embed/' + videoId;
                    $scope.videoTitle = result.snippet.title;
                }
            });
        };
        $scope.videos = [{
            iFrameUrl: 'https://www.youtube.com/embed/Bgqc2m7aBzs',
            title: 'Inside the 1996 Everest Disaster - Ken Kamler',
            voteCount: 0,
            genre: "rock"
        }];
        $scope.postVideo = function (iFrameUrl, title, genre) {
            let videoObj = {
                iFrameUrl: iFrameUrl,
                title: title,
                genre: genre,
                voteCount: 0
            }
            videoData.saveVideo(videoObj);
            $scope.videos.push(videoObj);
            $scope.sharedLink = '';
            $scope.iFrameUrl = '';
            $scope.videoTitle = '';
        }
        $scope.upVote = function (video) {
            video.voteCount ++;
        }
        $scope.downVote = function (video) {
            video.voteCount --;
        }
        $scope.selectedGenre = '';
        $scope.selectedGenreFilter = '';
        $scope.genres = [
            {name: "rock"},
            {name: "electronic"},
            {name: "hip hop"},
            {name: "heavy metal"},
            {name: "classical"},
            {name: "jazz"},
            {name: "pop"},
            {name: "reggae"},
            {name: "indie"}
        ];
        $scope.filterGenres = [{name: "all"}].concat($scope.genres);
        $scope.filterGenresFunction = function(name) {
            if(name !== "all"){
                return name;
            }
        }
        $scope.orderByValue = '-voteCount';
        $scope.sortByHighestRated = true;
        $scope.toggleSortBy = function() {
            $scope.sortByHighestRated = !$scope.sortByHighestRated;
            if($scope.sortByHighestRated){
                $scope.orderByValue = '-voteCount';
            } else {
                $scope.orderByValue = 'voteCount';
            }
        }
    });