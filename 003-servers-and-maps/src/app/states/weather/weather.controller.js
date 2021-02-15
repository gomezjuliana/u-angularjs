(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, WeatherFactory, $mdDialog) {
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
                focus: true,
                draggable: false
            }
        }
    });

    $scope.$on('leafletDirectiveMap.map.click', getLocation);

    function getLocation(event, args, $mdDialog){
        $scope.center.lat = args.leafletEvent.latlng.lat;
        $scope.center.lng = args.leafletEvent.latlng.lng;

        var type = '';

        if (vm.kind === '0'){
            type = 'weather';
        } else if (vm.kind === '1'){
            type = 'uvi'
        };

        WeatherFactory.getWeather(type, $scope.center.lat, $scope.center.lng).then(function(response){
            $scope.markers.locationMarker.lat = $scope.center.lat;
            $scope.markers.locationMarker.lng = $scope.center.lng;

            if (type === 'weather'){
                openWeatherModal(response.data);    
            } else if (type === 'uvi'){
                openUviModal(response.data);
            }
        }); 
    };

    function openWeatherModal(data){
        var converted = Math.round(convertToCelsius(data.main.temp));

        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.body))
                .clickOutsideToClose(true)
                .title(data.name)
                .textContent('It\'s '+converted+' degrees Celcius')
                .ariaLabel('Alert Dialog')
                .ok('Got it!')
        );
    };

    function openUviModal(data){
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.body))
                .clickOutsideToClose(true)
                .title('Oh wow!')
                .textContent('The UV index here is '+ data.value)
                .ariaLabel('Alert Dialog')
                .ok('Got it!')
        );
    };

    function convertToCelsius(kelvin){
        var celsius = kelvin - 273.15;
        return celsius;
    };
  }
})();
