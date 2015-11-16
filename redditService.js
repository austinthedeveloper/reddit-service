angular.module('redditService', []);
angular.module('redditService')
  .factory('reddit', function($http, $q) {
    return {
      get: function(options) {
        var delay = $q.defer();
        var obj = {
          limit: options.limit || 25,
          count: options.count || null
        };
        $http.get('http://api.reddit.com/hot', {params: obj})
          .success(function(data) {
            delay.resolve(data); 
          });

        return delay.promise; 
      }
    };
  });