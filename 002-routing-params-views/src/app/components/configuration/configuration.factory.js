{

  angular
    .module('angularApp')
    .factory('Configuration', ConfigFactory);

  /** @ngInject */
  function ConfigFactory($http, $q, $log) {
    return {
    	getConfiguration: getConfiguration
    }

    function getConfiguration(){
    	return $http.get('app/components/configuration/configuration.json')
	    .success(function(response){
	    	return response;
	    })
	    .catch(function(error){
	    	return $q.reject(error)
	    });
	}
  }
}