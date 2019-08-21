'use strict';

/**
 * @ngdoc service
 * @name shareMusicApp.filters
 * @description
 * # filters
 * Service in the shareMusicApp.
 */

angular.module('shareMusicApp').factory('filters', function () {
    return {
        selectedGenre: '',
        orderByValue: '-voteCount',
        sortByHighestRated: true,
        filterByGenre: function () {
            if (this.selectedGenre !== 'all') {
                return this.selectedGenre;
            }
        },
        toggleSortBy: function () {
            this.sortByHighestRated = !this.sortByHighestRated;
            if (this.sortByHighestRated) {
                this.orderByValue = '-voteCount';
            } else {
                this.orderByValue = 'voteCount';
            }
        }
    };
});