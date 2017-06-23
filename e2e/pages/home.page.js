const Page = require('./base.page');


class Home extends Page {
  open() {
    super.open('');
  }

  isOpen() {
    return this.header.isVisible();
  }

  get header() {
    return browser.element('h2*=Welcome to');
  }

  waitForLoad() {
    return this.header.waitForExist(2000);
  }

  wasNotLoad() {
    return this.header.waitForExist(2000, true);
  }
}

module.exports = new Home();
