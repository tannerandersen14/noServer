angular.module('gameFinder').controller('gameCtrl', function($scope, $state, $interval, gameService) {
  $scope.getGameList = function() {
    gameService.getGameList().then(function(response) {
      $scope.gameList = response.data.results;
    })
  }
  $scope.getSearchList = function() {
    gameService.getSearchList($scope.search).then(function(response) {
      $scope.searchList = response.data.results
      $state.go('searchResults')
    })
  }
  $scope.getVideoList = function() {
    gameService.getVideoList().then(function(response) {
      $scope.videoList = response.data.results;
    })
  }
  $scope.getReviewList = function() {
    gameService.getReviewList().then(function(response) {
      $scope.reviewList = response.data.results;
    })
  }
  $scope.getPromoList = function() {
    gameService.getPromoList().then(function(response) {
      $scope.promoList = response.data.results;
      console.log($scope.promoList)
    })
  }
  $interval(function() {
    $scope.time = new Date().toLocaleTimeString();
  }, 1000)
})
