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
    return this.navigation.waitForExist(2000);
  }

  wasNotLoad() {
    return this.navigation.waitForExist(2000, true);
  }
}

module.exports = new Home();
