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
                focus: true,
                draggable: false
            }
        }
    });

    $scope.$on('leafletDirectiveMap.map.click', getLocation);


    function getLocation(event, args, $mdDialog){
        $scope.center.lat = args.leafletEvent.latlng.lat;
        $scope.center.lng = args.leafletEvent.latlng.lng;

        WeatherFactory.getWeather($scope.center.lat, $scope.center.lng).then(function(response){
            var converted = convertToCelsius(response.data.main.temp);
            $scope.markers.locationMarker.lat = $scope.center.lat;
            $scope.markers.locationMarker.lng = $scope.center.lng;
            console.log(response.data);
        });

        // $mdDialog.show(
        //     $mdDialog.alert()
        //         .parent(angular.element(document.querySelector('#popupContainer')))
        //         .clickOutsideToClose(true)
        //         .title('This is an alert title')
        //         .textContent('You can specify some description text in here.')
        //         .ariaLabel('Alert Dialog Demo')
        //         .ok('Got it!')
        //         .targetEvent(ev)
        // );

        openModal();
    }

    function convertToCelsius(kelvin){
        var celsius = kelvin - 273.15;
        return celsius;
    }

    function openModal(){
        console.log($mdDialog);
    }
  }
})();
