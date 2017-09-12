(function() {

  angular
    .module('angularEx1')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl:'app/states/dashboard/dashboard.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
