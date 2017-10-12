(function (){
	'use strict'

	angular
		.module('angularApp')
		.component('config', {
			templateUrl: 'app/states/dashboard/dashboard/config.html',
			controller: 'DashboardConfigController',
			controllerAs: 'dasConfigCtrl'
		});
})();