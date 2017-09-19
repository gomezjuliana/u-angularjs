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
        },
        markers: {
            locationMarker: {
                lat: null,
                lng: null,
                message: null,
                focus: true,
                draggable: false
            }
        }
    });

    $scope.$on('leafletDirectiveMap.map.click', getLocation);


    function getLocation(event, args){

        $scope.center.lat = args.leafletEvent.latlng.lat;
        $scope.center.lng = args.leafletEvent.latlng.lng;

        WeatherFactory.getWeather($scope.center.lat, $scope.center.lng).then(function(response){
            var converted = convertToCelsius(response.data.main.temp);
            $scope.markers.locationMarker.lat = $scope.center.lat;
            $scope.markers.locationMarker.lng = $scope.center.lng;
            $scope.markers.locationMarker.message = 'It\'s '+Math.round(converted)+' degrees here in '+response.data.name;
            console.log(response.data);
        });
    }

    function convertToCelsius(kelvin){
        var celsius = kelvin - 273.15;
        return celsius;
    }
  }
})();
