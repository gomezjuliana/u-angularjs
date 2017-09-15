(function(){

	angular
		.module('angularApp')
		.controller('NavbarController', NavbarController);

		/** @ngInject */

		function NavbarController($state, $stateParams, Auth, $timeout){
			console.log(Auth.currentUser())
		}

})();