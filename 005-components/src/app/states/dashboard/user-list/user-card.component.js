(function (){
	'use strict';

	angular
		.module('angularApp')
		.component('userCard', {
			templateUrl: 'app/states/dashboard/user-list/user-card.html',
			bindings: {
				user: '<',
				onUserSelected: '&',
				onUserLeft: '&'
			}
		})
})