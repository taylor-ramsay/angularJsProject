'use strict';

/**
 * @ngdoc service
 * @name shareMusicApp.videos
 * @description
 * # videos
 * Service in the shareMusicApp.
 */

angular.module('shareMusicApp').factory('videos', function ($http, $q) {
    return {
        currentVideo: {
            userLink: '',
            iFrameUrl: '',
            title: '',
            genre: '',
            resolved: false
        },
        videos: [{
            iFrameUrl: 'https://www.youtube.com/embed/Bgqc2m7aBzs',
            title: 'Inside the 1996 Everest Disaster - Ken Kamler',
            voteCount: 0,
            genre: 'rock'
        }],
        getIdFromUrl: function (url) {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = url.match(regExp);
            return (match && match[7].length === 11) ? match[7] : false;
        },
        getMetaData: function (videoId) {
            var apiKey = 'AIzaSyAe4SmDokP6G1prbOebnshJo1ujvqhKJL0';
            var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=' + videoId +
                '&key=' + apiKey + '&format=json';
            return $http.jsonp(url);
        },
        loadYouTubeVideoFromLink: function (link, genre) {
            var vm = this;
            var videoId = this.getIdFromUrl(link);
            return $q(function (resolve) {
                vm.getMetaData(videoId).then(function (res) {
                    var result = res.data.items[0];
                    if (result) {
                        resolve({
                            userLink: link,
                            iFrameUrl: 'https://www.youtube.com/embed/' + videoId,
                            title: result.snippet.title,
                            genre: genre,
                            resolved: true
                        });
                    } else {
                        resolve({
                            userLink: link,
                            resolved: true
                        });
                    }
                });
            });
        },
        postVideo: function (iFrameUrl, title, genre, form) {
            if (form.$valid && genre) {
                let videoObj = {
                    iFrameUrl: iFrameUrl,
                    title: title,
                    genre: genre,
                    voteCount: 0
                };
                this.videos.push(videoObj);
                this.resetForm();
            }
        },
        resetForm: function () {
            this.currentVideo.userLink = '';
            this.currentVideo.iFrameUrl = '';
            this.currentVideo.title = '';
            this.currentVideo.genre = '';
            this.currentVideo.resolved = false;
        },
        upVote: function (video) {
            video.voteCount++;
        },
        downVote: function (video) {
            video.voteCount--;
        }
    };
});