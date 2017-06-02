import { getElement } from '../common/element';

const basePage = require('./base.page');


export default Object.create(basePage, {
  go: {
    value(page = 'login') {
      return this.open(page);
    },
  },
  clickOnSubmit: {
    value() {
      getElement('button.button--submit').click();
    },
  },
  waitForLoad: {
    value() {
      getElement('#loginForm');
    },
  },
  email: {
    get() {
      return getElement('#email');
    },
  },
  password: {
    get() {
      return getElement('#password');
    },
  },
  login: {
    get() {
      return getElement('.button--submit').getText();
    },
  },
});
