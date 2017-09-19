(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, WeatherFactory) {
    var vm = this;

    vm.kind = '0';

    angular.extend($scope, {
        center: {
            lat: 38.8225909761771,
            lng: -96.5478515625,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
    });

    $scope.$on('leafletDirectiveMap.map.click', getLocation);


    function getLocation(event, args){

        $scope.center.lat = args.leafletEvent.latlng.lat;
        $scope.center.lng = args.leafletEvent.latlng.lng;
        
        WeatherFactory.getWeather($scope.center.lat, $scope.center.lng).then(function(response){
            console.log(response.data);
        });
    }
  }
})();
