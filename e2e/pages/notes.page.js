const Page = require('./base.page');


class Notes extends Page {
  open() {
    super.open('/notes');
  }

  get header() {
    return browser.element('h2=Add New Note');
  }

  isOpen() {
    return this.header.isVisible();
  }

  get noteTextInput() {
    return browser.element('#textField .input');
  }

  get addNoteButton() {
    return browser.element('.field .button.is-primary');
  }

  get lastNote() {
    return browser.element('ul li:last-child h5');
  }

  get lastNoteText() {
    return browser.getText('ul li:last-child h5');
  }

  waitForLoad() {
    return this.header.waitForExist(2000);
  }
}

module.exports = new Notes();
