angular.module('gameFinder').directive('timeDirective', function() {
  return {
    controller: 'gameCtrl',
    templateUrl: '../templates/time.html',
    restrict: 'E',
    scope: {
      twoWayDataBinding: '=',
      stringBinding: '@',
      functionBinding: '&',
      time: '='
    }
  }
})
