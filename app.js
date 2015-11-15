var app = angular.module('plnkrApp', ['ngMaterial', 'redditService']);
//https://baconipsum.com/json-api/
app
  .controller("DemoController", function($scope) {
  })
  .directive('redditPosts', function(bacon) {
    return {
      template: '<p ng-repeat="item in redditData">{{item}}</p>',
      link: function($scope, elem, attrs) {
        var options = {
          type: attrs.type || null,
          paras: attrs.paras || null,
          sentences: attrs.sentences || null,
          startWithLorem: attrs.startWithLorem || null,
          format: attrs.format || null
        };
        reddit.get(options).then(function(data) {
          $scope.redditData = data;
        });
      }
    }
  });