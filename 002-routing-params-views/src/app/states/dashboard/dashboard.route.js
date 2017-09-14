(function() {

  angular
    .module('angularApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        abstract: true,
        url:'/dashboard',
        views:{
          "site@":{
            template: '<section class="dashboard" ui-view="main"></section>'
          }
        },
          /** @ngInject */
        onEnter: function (Auth, $state) {
          if (!Auth.currentUser()){
            $state.go('login')
          }
        }
      })

      .state('mainDashboard', {
        parent: 'dashboard',
        url: '/main-dashboard',
        params: {
          currentUser: {}
        },
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/main-dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashCtrl'
          }
        }
      })

      .state('detail', {
        parent: 'dashboard',
        url: '/detail',
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/detail/detail.html',
            controller: 'DashboardDetailController',
            controllerAs: 'dashDetailCtrl'
          }
        }
      })

      .state('config', {
        parent: 'dashboard',
        url: '/config',
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/config/config.html',
            controller: 'DashboardConfigController',
            controllerAs: 'dashConfigCtrl'
          }
        },
        resolve: {
          promiseObj:  function($http){
              return $http({method: 'GET', url: 'app/components/configuration/configuration.json'})
                      .success(function(response){return response});
          }
        }
      })
  }
})();
