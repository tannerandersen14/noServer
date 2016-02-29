angular.module('gameFinder').directive('cssDirective', function() {
    return {
      link: function(scope, element, attributes) {
        element.css({'text-decoration': 'underline'});
    }
  }
})
