(function() {
  'use strict';

  describe('service weatherFactory', function() {
    var weatherFactory;

    beforeEach(module('angularApp'));
    beforeEach(module('ngResource'));
    beforeEach(inject(function($injector) {
      weatherFactory = $injector.get('WeatherFactory');
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.when('GET', /(.*)\.json/).respond();
      $httpBackend.when('GET', /(.*)\.html/).respond();
      WEATHER_API = $injector.get('WEATHER_API');
      weatherApi = 'http://api.openweathermap.org';
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });


    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {
      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });

      it('should return weather when it has lat and lon', function() {
        var lat = 40.245991504199026;
        var lon = -111.181640625;

        $httpBackend.expectGET(weatherApi + '/data/2.5/weather' + '?APPID='+WEATHER_API+'&lat='+lat+'&lon='+lon ).respond({data:'This is weather'});

        promise.query().$promise.then(function(response){
          expect(response.data).toBe('This is weather');
        });

        $httpBackend.flush();
      });
    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });

      it('should return UV when it has lat and lon', function() {
        var lat = 40.245991504199026;
        var lon = -111.181640625;

        $httpBackend.expectGET(weatherApi + '/v3/uvi/'+  [lat, lon] + '/current.json?appid='+WEATHER_API ).respond({data:'UV works!'});

        var promise = weatherFactory.getUV();

        promise.query().$promise.then(function(response){
          expect(response.data).toBe('UV works!');
        });

        $httpBackend.flush();

      });
    });

  });
})();