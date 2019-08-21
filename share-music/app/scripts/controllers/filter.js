'use strict';

/**
 * @ngdoc function
 * @name shareMusicApp.controller:filterCtrl
 * @description
 * # filterCtrl
 * Controller of the shareMusicApp
 */
angular.module('shareMusicApp')
    .controller('filterCtrl', function ($scope, filters, genres) {
        $scope.selectedGenre = filters.selectedGenre;
        $scope.genres = genres.genresWithAll();
        $scope.filterByGenre = function(name) {
            filters.filterByGenre(name);
        };
        $scope.orderByValue = filters.orderByValue;
        $scope.sortByHighestRated = filters.sortByHighestRated;
        $scope.toggleSortBy = function(){
            filters.toggleSortBy();
            $scope.orderByValue = filters.orderByValue;
        };
    });