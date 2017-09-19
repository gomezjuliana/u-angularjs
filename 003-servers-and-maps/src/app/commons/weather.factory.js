(function() {
  'use strict';

	angular
		.module('angularApp')
		.factory('WeatherFactory', WeatherFactory);

	/** @ngInject **/
	function WeatherFactory($http, $q){
		return {
			getWeather: getWeather
		}

		function getWeather(lat, lng){
			return $http.get(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=534eccb946ce639dbb41f82b8be15dcc`)
			.success(function(response){
				return response;
			})
			.catch(function(error){
				return $q.reject(error)
			});
		}
	}
})();