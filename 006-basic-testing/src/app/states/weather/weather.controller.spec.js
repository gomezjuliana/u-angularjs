(function() {
  'use strict';

	describe('WeatherController', function() {
    	beforeEach(module('angularApp'));

    	var suite = {};

    	beforeEach(inject(function($injector) {
    		suite.$controller = $injector.get('$controller');
    		suite.$rootScope = $injector.get('$rootScope');
    		suite.$q = $injector.get('$q');
            suite.$mdDialog = $injector.get('$mdDialog');
            suite.$log = $injector.get('$log');

            suite.weatherFactoryMock = {
                getWeather: function (lat,lon) {
                    return {
                        query: function () {
                            suite.queryDeferred = suite.$q.defer();
                                return { $promise: suite.queryDeferred.promise };
                        }
                    };
                },

                getUV: function (lat,lon) {
                    return {
                        query: function () {
                            suite.queryDeferred = suite.$q.defer();
                                return { $promise: suite.queryDeferred.promise };
                        }
                    };
                },
            };

            suite.mockArg = {
                args: {
                    leafletEvent: {
                        latlon: {
                            lat: 40.245991504199026,
                            lon: -111.181640625
                        }
                    }
                }
            };

            suite.vm = suite.$controller('WeatherController', {
                WeatherFactory: suite.weatherFactoryMock,
                $scope: suite.$rootScope,
                $mdDialog: suite.$mdDialog,
                $log: suite.$log
            });

            afterEach(function () {
                suite = {};
            });

            afterAll(function () {
                suite = null;
            });

            function resolveAndRefresh(data) {
                suite.queryDeferred.resolve(data);
                suite.$rootScope.$apply();
            }

            function rejectAndRefresh(data) {
                suite.queryDeferred.reject(data);
                suite.$rootScope.$apply();
            }

            describe('triggerClick function', function () {
                it('should call getWeather and be successful', function() {
                    suite.vm.kind = 0;
                    spyOn(suite.weatherFactoryMock, 'getWeather');
                    spyOn(suite.vm, 'openModal');
                    suite.vm.triggerClick(null, suite.mockArg.args);
                    resolveAndRefresh({
                        name: 'Place',
                        weather: [{description: 'Cloudy'}],
                        main: {temp: 30}
                    });
                    expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
                    expect(suite.vm.response.success).toBe(true);
                    expect(suite.vm.openModal).toHaveBeenCalled();
                });

                it('should call getWeather and is empty', function () {
                    suite.vm.kind = 0;
                    spyOn(suite.weatherFactoryMock, 'getWeather');
                    spyOn(suite.vm, 'openModal');
                    suite.vm.triggerClick(null, suite.mockArg.args);
                    resolveAndRefresh({});
                    expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
                    expect(suite.vm.response.success).toBe(false);
                    expect(suite.vm.openModal).toHaveBeenCalled();
                });

                it('should call getWeather and throws an error', function () {
                    suite.vm.kind = 0;
                    spyOn(suite.weatherFactoryMock, 'getWeather');
                    spyOn(suite.$log, 'debug');
                    suite.vm.triggerClick(null, suite.mockArg.args);
                    resolveAndRefresh('Cannot reach API');
                    expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
                    expect(suite.$log.debug).toHaveBeenCalled();
                });

                it('should call getUV and be successful', function() {
                    suite.vm.kind = 1;
                    spyOn(suite.weatherFactoryMock, 'getUV');
                    spyOn(suite.vm, 'openModal');
                    suite.vm.triggerClick(null, suite.mockArg.args);
                    resolveAndRefresh({data:30});
                    expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
                    expect(suite.vm.response.success).toBe(true);
                    expect(suite.vm.openModal).toHaveBeenCalled();
                });

                it('should call getUV and is empty', function () {
                    suite.vm.kind = 1;
                    spyOn(suite.weatherFactoryMock, 'getUV');
                    spyOn(suite.vm, 'openModal');
                    suite.vm.triggerClick(null, suite.mockArg.args);
                    resolveAndRefresh({});
                    expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
                    expect(suite.vm.response.success).toBe(false);
                    expect(suite.vm.openModal).toHaveBeenCalled();
                });

                it('should call getUV and throws an error', function () {
                    suite.vm.kind = 1;
                    spyOn(suite.weatherFactoryMock, 'getWUV');
                    spyOn(suite.$log, 'debug');
                    suite.vm.triggerClick(null, suite.mockArg.args);
                    resolveAndRefresh('Cannot reach API');
                    expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
                    expect(suite.$log.debug).toHaveBeenCalled();
                });
            });
    	});
	});
})();