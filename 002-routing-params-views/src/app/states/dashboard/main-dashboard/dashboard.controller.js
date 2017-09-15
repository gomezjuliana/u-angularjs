{

	angular
		.module('angularApp')
		.controller('DashboardController', DashboardController);

	/** @ngInject **/
	function DashboardController($stateParams, $state) {
		var dashCtrl = this;
		//dashCtrl.currentUser = $stateParams.currentUser;
		dashCtrl.goToDetail = goToDetailMethod;
		dashCtrl.goToConfig = goToConfigMethod;

		function goToDetailMethod() {
			console.log('hi');
			$state.go('dashboard.detail');
		}

		function goToConfigMethod() {
			console.log('hey!');
			$state.go('dashboard.config');
		}
	}
}