(function() {

  angular
    .module('angularApp')
    .factory('Configuration', ConfigFactory);

  /** @ngInject */
  function ConfigFactory($http) {
    $http({method: 'GET', url: 'app/components/configuration/configuration.json'})
    .success(function(response){console.log('success', response)})
    .catch(function(response){console.log('fail')});
  }
})();