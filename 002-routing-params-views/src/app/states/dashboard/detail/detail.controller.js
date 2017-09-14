(function(){
	'use strict';

	angular
		.module('angularApp')
		.controller('DashboardDetailController', DashboardDetailController);

	/** @ngInject **/
	function DashboardDetailController($state, $http) {
		$http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts'})
        .success(function(response){console.log('success', response)})
        .catch(function(response){console.log('fail')});
	};

})();