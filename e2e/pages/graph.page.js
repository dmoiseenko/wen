const Page = require('./base.page');


class Graph extends Page {
  open() {
    super.open('/graph');
  }

  get header() {
    return browser.element('h2=Touch And Drag');
  }

  isOpen() {
    return this.header.isVisible();
  }

  waitForLoad() {
    return this.header.waitForExist(2000);
  }
}

module.exports = new Graph();
