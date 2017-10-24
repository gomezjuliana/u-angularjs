'use strict';

describe('The main view', function () {
  var page;

  function fillForm() {
    page.icon.click();
    page.icon.sendKeys('home');
    page.background.sendKeys('orange');
    page.textColor.sendKeys('white');
    page.title.sendKeys('Talos Business Card');
    page.description.sendKeys('Juliana Gomez - October 2017');
  }

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should be right data into directive', function() {
    fillForm();

    expect(page.directive.isPresent()).toBe(true);
    expect(page.directiveTitle.evaluate('title').isPresent()).toBe(true);
    expect(page.directiveDescription.evaluate('description').isPresent()).toBe(true);
  });

  it('should favorite list equal to 1', function () {
    fillForm();
    page.setFavorite.click();
    expect(page.favoriteList.count()).toEqual(1);
  });

});
