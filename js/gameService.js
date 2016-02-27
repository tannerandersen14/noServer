angular.module('gameFinder').service('gameService', function($http, $q) {
  var apiKey = '247736a38d7358ced23201ceb69f8e5663cdad5e';
  this.getGameList = function() {
    return $http.get('http://www.giantbomb.com/api/games/?api_key=247736a38d7358ced23201ceb69f8e5663cdad5e&format=json&filter=original_release_date:2016-2-19 00:00:00 |2016-2-26 00:00:00 &sort=original_release_date:dec&?callback=JSON_CALLBACK')
  }
  this.getSearchList = function(searchTerm) {
    return $http.get('http://www.giantbomb.com/api/search/?api_key=247736a38d7358ced23201ceb69f8e5663cdad5e&format=json&query=' + searchTerm + '&resources=game')
  }
  this.getVideoList = function() {
    return $http.get('http://www.giantbomb.com/api/videos/?api_key=247736a38d7358ced23201ceb69f8e5663cdad5e&format=json&filter=publish_date:2016-2-19 00:00:00 |2016-2-26 00:00:00 &sort=publish_date:dec&?callback=JSON_CALLBACK')
  }
  this.getReviewList = function() {
    return $http.get('http://www.giantbomb.com/api/reviews/?api_key=247736a38d7358ced23201ceb69f8e5663cdad5e&format=json&filter=publish_date:2016-2-19 00:00:00 |2016-2-26 00:00:00 &sort=publish_date:dec&?callback=JSON_CALLBACK')
  }
})
