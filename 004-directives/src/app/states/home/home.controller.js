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
    vm.resetFavorite = resetFavorite;
    vm.eraseCard = eraseCard;
    vm.fave = null;

    function setFavorite(title, description, background, textColor, icon){
      vm.fave = {
        title: title,
        description: description,
        background: background,
        textColor: textColor,
        icon: icon
      }
      vm.favoriteList.push(vm.fave);
      vm.card = {};
      vm.card.setFavorite = setFavorite;
      vm.fave = null;
    }

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }

    function resetFavorite(value) {
      vm.card = value;
      vm.card.setFavorite = setFavorite;
    }

    function eraseCard(title, description, background, textColor, icon) {
      vm.fave = {
        title: title,
        description: description,
        background: background,
        textColor: textColor,
        icon: icon
      }
      vm.card = {}
      vm.card.setFavorite = setFavorite;
    }
  }

})();
