'use strict';

/**
 * @ngdoc service
 * @name shareMusicApp.genres
 * @description
 * # genres
 * Service in the shareMusicApp.
 */

angular.module('shareMusicApp').factory('genres', function () {
    return {
        genres: [
            { name: 'rock' },
            { name: 'electronic' },
            { name: 'hip hop' },
            { name: 'heavy metal' },
            { name: 'classical' },
            { name: 'jazz' },
            { name: 'pop' },
            { name: 'reggae' },
            { name: 'indie' }
        ],
        genresWithAll: function(){
            return [{ name: 'all' }].concat(this.genres);
        }
    };
});