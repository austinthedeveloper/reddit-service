angular.module('redditService', []);
angular.module('redditService')
  .factory('reddit', function($http, $q) {
    return {
      get: function(options) {
        var delay = $q.defer();
        var obj = {
          type: options.type || 'meat-and-filler',
          paras: options.paras || null,
          sentences: options.sentences || null,
          startWithLorem: options.startWithLorem || null,
          format: options.format || 'json'
        };
        $http.get('https://baconipsum.com/api/', {params: obj})
          .success(function(data) {
            delay.resolve(data); 
          });

        return delay.promise; 
      }
    };
  });