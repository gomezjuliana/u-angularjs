(function() {

  describe('HomeController', function() {
    var suite = {};

    beforeEach(module('angularApp'));

    beforeEach(inject(function($injector) {
      suite.$controller = $injector.get('$controller');
      suite.$rootScope = $injector.get('$rootScope');
      suite.RESERVED_BY= $injector.get('RESERVED_BY');
      suite.scope = suite.$rootScope.$new();

      suite.vm = suite.$controller('HomeController', {
        RESERVED_BY: suite.RESERVED_BY,
        $scope: suite.scope
      });
    }));

    afterEach(function(){
      suite = {};
    });

    afterAll(function() {
      suite = null;
    });

    it('should be registered', function() {
      expect(suite.vm).not.toEqual(null);
    });

    describe('setFavorite function', function () {
      it('should exist', function () {
        expect(suite.vm.card.setFavorite).toBeDefined();
      });

      it('should add a new favorite', function () {
        spyOn(suite.vm.card, 'setFavorite').and.callThrough();
        suite.vm.card.setFavorite('Jules');
        expect(suite.vm.card.setFavorite).toHaveBeenCalledWith('Jules');
        expect(suite.vm.favoriteList).toEqual(['Jules']);
      });
    });

    describe('setIcon function', function() {
      it('should exist', function () {
        expect(suite.vm.setIcon).toBeDefined();
      });

      it('should set a new icon', function () {
        spyOn(suite.vm, 'setIcon').and.callThrough();
        suite.vm.setIcon('home');
        suite.$rootScope.$digest();
        expect(suite.vm.setIcon).toHaveBeenCalledWith('home');
        expect(suite.vm.card.icon).toEqual('home'); 
      });
    });

  });
})();