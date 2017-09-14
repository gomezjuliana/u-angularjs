(function(){
	'use strict';

	angular
		.module('angularApp')
		.controller('DashboardConfigController', DashboardConfigController);

	/** @ngInject **/
	function DashboardConfigController($log, $stateParams, Auth, promiseObj) {
		var dashConfigCtrl = this;

		console.log($stateParams)

		dashConfigCtrl.list = promiseObj.data;
		console.log(dashConfigCtrl.list)
	};

})();