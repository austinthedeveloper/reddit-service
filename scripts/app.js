var app = angular.module('plnkrApp', ['ngMaterial', 'redditService']);
//https://baconipsum.com/json-api/
app
  .controller("DemoController", function ($scope, reddit) {

    reddit.get().then(function (data) {
      $scope.redditData = data.data.children;
    });

  })
  .module('underscore', []).factory('_', ['$window', function ($window) {
    return $window._; // assumes underscore has already been loaded on the page
    }]);