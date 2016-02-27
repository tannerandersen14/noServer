angular.module('gameFinder', ['ui.router'])


angular.module('gameFinder').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .state('gameList', {
      url: '/gamelist',
      templateUrl: 'templates/gamesList.html',
      controller: 'gameCtrl',
    })
    .state('searchResults', {
      url: '/searchresults',
      templateUrl: 'templates/searchresults.html',
      controller: 'gameCtrl'
    })
    .state('videoList', {
      url: '/videolist',
      templateUrl: 'templates/videoList.html',
      controller: 'gameCtrl'
    })
    .state('reviewList', {
      url: '/reviewlist',
      templateUrl: 'templates/reviewList.html',
      controller: 'gameCtrl'
    })
    $urlRouterProvider.otherwise('/')

});
