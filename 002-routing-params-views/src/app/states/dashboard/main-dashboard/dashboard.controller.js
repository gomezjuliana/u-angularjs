{

	angular
		.module('angularApp')
		.controller('DashboardController', DashboardController);

	/** @ngInject **/
	function DashboardController($state) {
		var dashCtrl = this;
		dashCtrl.goToDetail = goToDetailMethod;
		dashCtrl.goToConfig = goToConfigMethod;

		function goToDetailMethod() {
			$state.go('dashboard.detail');
		}

		function goToConfigMethod() {
			$state.go('dashboard.config');
		}
	}
}