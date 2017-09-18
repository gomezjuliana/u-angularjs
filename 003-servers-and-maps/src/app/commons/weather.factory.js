{
	angular
		.module('angularApp')
		.factory('WeatherFactory', WeatherFactory);

	/** @ngInject **/
	function WeatherFactory($resource, $filter, $rootScope, WEATHER_API){
		var vm = this;

		vm.weather = {
			getWeather: getWeather
		};

		function getWeather(lat, lon) {
			return $resource('http://api.openweathermap.org/data/2.5/weather?APPID='+WEATHER_API+'&lat='+lat+'&lon='+lon, {}, {
				'query': {
					method: 'GET'
				}
			});
		}
		return vm.weather;
	}
}