(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, SITE_NAME, $state) {
    var vm = this;
    vm.mainTitle = SITE_NAME;
    vm.signUpToday = signUpToday;
    vm.submitForm = submitForm;

    function signUpToday(){
      $log.debug('signUpToday clicked!');
    }

    function submitForm(){
      // $window.location.href = "#/dashboard"
      $state.go('dashboard');
    }

  }
})();
