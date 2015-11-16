var app = angular.module('redditApp', ['ngMaterial', 'redditService']);
//https://baconipsum.com/json-api/
app
  .controller("MainController", function ($scope, reddit, _) {
    
  $scope.results = [];
  
  var options = {
    limit: $scope.limit || 25,
    count: $scope.count || null
  };
  
  $scope.getPosts = function(object) {
    reddit.get(options).then(function (data) {
      $scope.redditData = data.data.children;
    });
  };
  
  $scope.getPosts();
    

  })
  .factory('_', ['$window', function ($window) {
    return $window._; // assumes underscore has already been loaded on the page
    }]); 