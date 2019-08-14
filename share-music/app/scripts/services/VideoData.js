'use strict';

/**
 * @ngdoc service
 * @name shareMusicApp.videoData
 * @description
 * # videoData
 * Service in the shareMusicApp.
 */

angular.module('shareMusicApp').factory('videoData', function ($http) {
    return {
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
        }
    };
});