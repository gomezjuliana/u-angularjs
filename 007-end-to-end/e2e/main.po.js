/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {

  this.icon = element(by.css('body')).all(by.repeater('icon in homeCtrl.icons')).first();
  this.background = element.all(by.css('.md-color-picker-input')).first();
  this.textColor = $$('.md-color-picker-input').last();
  this.title = element(by.model('homeCtrl.card.title'));
  this.description = element(by.model('homeCtrl.card.description'));
  this.setFavorite = element(by.css('#favoriteBtn'));
  this.favoriteList = element(by.css('body')).all(by.repeater('favorite in homeCtrl.favoriteList'));

  this.directive = element(by.css('#card'));
  this.directiveTitle = element(by.css('#cardTitle'));
  this.descriptionDescription = element(by.css('#cardDescription'));
  this.directiveReservedBy = element(by.css('#cardReservedBy'));

};

module.exports = new MainPage();
