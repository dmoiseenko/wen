const Page = require('./base.page');


class Home extends Page {
  open() {
    super.open('');
  }

  isOpen() {
    return browser.isVisible('.nav');
  }

  get navigation() {
    return browser.element('.nav');
  }

  waitForLoad() {
    return this.navigation.waitForExist(500);
  }

  wasNotLoad() {
    return this.navigation.waitForExist(500, true);
  }
}

module.exports = new Home();
