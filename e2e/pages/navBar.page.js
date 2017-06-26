const Page = require('./base.page');


class NavBar extends Page {
  get logOutButton() {
    return browser.element('.nav-menu .nav-item .button.is-primary');
  }

  get homeTab() {
    return browser.element('.nav-menu .is-tab:nth-child(1)');
  }

  get notesTab() {
    return browser.element('.nav-menu .is-tab:nth-child(2)');
  }

  get graphTab() {
    return browser.element('.nav-menu .is-tab:nth-child(3)');
  }

  get aboutTab() {
    return browser.element('.nav-menu .is-tab:nth-child(4)');
  }
}

module.exports = new NavBar();
