(function(){

	angular
		.module('angularApp')
		.controller('NavbarController', NavbarController);

		/** @ngInject */

		function NavbarController($state, Auth, $timeout){
			var navCtrl = this;

			console.log(navCtrl);

			navCtrl.user = Auth.currentUser();
			//console.log(navCtrl.user)
			navCtrl.logout = logOut;

			function logOut() {
				Auth.logOut();
				$timeout(function(){
					$state.go('auth.login');
				}, 2000);
			}
		}

})();