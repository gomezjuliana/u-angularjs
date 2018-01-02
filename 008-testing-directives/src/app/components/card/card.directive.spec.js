(function() {

  describe('directive card', function() {
    var $compile,
      $rootScope,
      $timeout,
      suite = {};
   
    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector, $templateCache) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    $timeout = $injector.get('$timeout');
    var template = $templateCache.get('app/components/card/card.html');
    $templateCache.put('app/components/card/card.html', template);

    $rootScope.card = {
      title: '',
      description: '',
      background: '',
      textColor: '',
      icon: '',
      favorite: function() {
        return true;
      },
      reservedBy: 'Juliana Gomez'
    };

    suite.template = 
      '<card title="card.title"'+
        'description="card.description"'+
        'text-color="card.testColor"'+
        'reserved-by="{{card.reservedBy}}"'+
        'cd-favorite="card.favorite(title)"'+
        'icon="{{card.icon}}">'+
      '</card>';

	}));

    afterEach(function (){
      suite.element.remove();
      suite = {};
    });

    afterAll(function(){
      suite = null;
    });

    it('show only reservedBy when rendered without params', function() {
      suite.element = $compile(angular.element(suite.template))($rootScope);
      $rootScope.$digest();
      expect(suite.element.find('.reservedBy').text()).toEqual($rootScope.card.reservedBy);
    });

    it('show no errors when rendered', function() {
      $rootScope.card = {
        title: 'Jules',
        description: 'Cat Whisperer',
        background: 'rgb(0, 0, 0)',
        textColor: 'rgb(255, 255, 255)',
        icon: 'home',
        favorite: function(title){
          return title;
        },
        reservedBy: 'Juliana Gomez'
      };
      
      suite.element = $compile(angular.element(suite.template))($rootScope);
      $rootScope.$digest();

      spyOn($rootScope.card, 'favorite');

      expect(suite.element.find('.title').text()).toEqual($rootScope.card.title);
      expect(suite.element.find('.description').text()).toEqual($rootScope.card.description);
      expect(suite.element.find('.icon').text()).toEqual($rootScope.card.icon);
      //wait
      $timeout(function(){
        expect(suite.element.find('.card').css('background-color')).toEqual($rootScope.card.background);
        expect(suite.element.find('.card').css('color')).toEqual($rootScope.card.textColor);
      }, 100);
      suite.element.find('.favorite').click();
      expect($rootScope.card.favorite).toHaveBeenCalledWith($rootScope.card.title);
    });

  });
})();



















