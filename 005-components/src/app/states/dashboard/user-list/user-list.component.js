(function (){
	'use strict'

	angular
		.module('angularApp')
		.component('dashboard.userList', {
			templateUrl: 'app/states/dashboard/user-list/user-list.html',
			controller: 'UserListController',
            controllerAs: 'userListCtrl',
            bindings: {
            	users: '<'
            }
		});
})();