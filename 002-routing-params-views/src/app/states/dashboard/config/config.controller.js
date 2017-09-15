(function(){
	'use strict';

	angular
		.module('angularApp')
		.controller('DashboardConfigController', DashboardConfigController);

	/** @ngInject **/
	function DashboardConfigController($log, $stateParams, users) {
		var dashConfigCtrl = this;

		dashConfigCtrl.list = users.data;
	};

})();