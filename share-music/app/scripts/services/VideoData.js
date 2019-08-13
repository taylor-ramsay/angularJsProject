'use strict';

shareMusicApp.factory('videoData', function ($http) {
    return {
        getIdFromUrl: function (url) {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = url.match(regExp);
            return (match && match[7].length == 11) ? match[7] : false;
        },
        getMetaData: function (videoId) {
            var apiKey = 'AIzaSyAe4SmDokP6G1prbOebnshJo1ujvqhKJL0';
            var videoId = videoId;
            var url = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=" + videoId +
                "&key=" + apiKey + "&format=json";
            return $http.jsonp(url);
        },
        saveVideo: function (videoId) {
            return $http.post('http://localhost:5000/save-video', {videoId: videoId});
        }
    };
});