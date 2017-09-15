(function(){

	angular
		.module('angularApp')
		.controller('NavbarController', NavbarController);

		/** @ngInject */

		function NavbarController($state, Auth, $timeout){
			var navCtrl = this;

			navCtrl.user = Auth.currentUser();
			navCtrl.logout = logOut;

			function logOut() {
				Auth.logOut();
				$timeout(function(){
					$state.go('auth.login');
				}, 2000);
			}
		}

})();