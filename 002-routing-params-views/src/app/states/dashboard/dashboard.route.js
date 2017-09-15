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
          },
          "navbar@":{
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'navCtrl'
          }
        },
          /** @ngInject */
        onEnter: function (Auth, $state) {
          if (!Auth.currentUser()){
            $state.go('login')
          }
        }
      })

      .state('dashboard.mainDashboard', {
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

      .state('dashboard.detail', {
        url: '/detail',
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/detail/detail.html',
            controller: 'DashboardDetailController',
            controllerAs: 'dashDetailCtrl'
          }
        }
      })

      .state('dashboard.config', {
        url: '/config',
        views: {
          "main": {
            templateUrl: 'app/states/dashboard/config/config.html',
            controller: 'DashboardConfigController',
            controllerAs: 'dashConfigCtrl'
          }
        },
        resolve: {
          user: function(Configuration){
            return Configuration()
          }
        }
      })
  }
})();
