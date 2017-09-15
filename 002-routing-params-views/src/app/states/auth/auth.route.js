(function() {
  'use strict';

  angular
    .module('angularApp')
    .config(routerAuth);

  /** @ngInject */
  function routerAuth($stateProvider) {
    $stateProvider
      .state('auth', {
        abstract: true,
        url: '/auth',
        views: {
          "site@": {
            template: '<section class="general-section" ui-view></section>'
          }
        }
      })
      .state('auth.login', {
      	url: '/login',
        params: {
          currentUser: {}
        },
        templateUrl: 'app/states/auth/login/login.html',
        controller: 'AuthLoginController',
        controllerAs: 'auLoginCtrl'
      })
       .state('auth.signin', {
      	url: '/signin',
        templateUrl: 'app/states/auth/signin/signin.html',
        controller: 'AuthSigninController',
        controllerAs: 'auSigninCtrl'
      });
  }

})();
