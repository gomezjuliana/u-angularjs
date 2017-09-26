(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(RESERVED_BY) {
    var vm = this;
    vm.RESERVED_BY = RESERVED_BY;
    vm.favoriteList = [];
    vm.icons = ['account_circle', 'code', 'face'];
    vm.card = {};
    vm.card.setFavorite = setFavorite;
    vm.setIcon = setIcon;
    vm.resetFavorite = resetFavorite

    function setFavorite(title, description, background, textColor, icon){
      var fave = {
        title: title,
        description: description,
        background: background,
        textColor: textColor,
        icon: icon
      }
      vm.favoriteList.push(fave);
      console.log(vm.favoriteList)
    }

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
      console.log(vm.card.icon)
    }

    function resetFavorite() {
      console.log('hey')
    }
  }

})();
