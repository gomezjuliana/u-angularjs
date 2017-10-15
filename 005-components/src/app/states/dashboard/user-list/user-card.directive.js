(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('userCardLegacy', userCard);

  function userCard () {
    return {
      restrict: 'E',
      scope: {
        user: '=',
        onUserSelected: '&',
        onUserLeft: '&'
      },
      templateUrl: 'app/states/dashboard/user-list/user-card.html'

    }
  }
})();

