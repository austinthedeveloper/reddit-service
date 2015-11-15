var app = angular.module('plnkrApp', ['ngMaterial', 'redditService']);
//https://baconipsum.com/json-api/
app
  .controller("DemoController", function($scope, reddit) {
    
    reddit.get().then(function(data) {
      $scope.redditData = data.data.children;
    });
    
  });