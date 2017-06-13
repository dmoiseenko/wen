const Page = require('./base.page');


class Login extends Page {
  get emailInput() {
    return browser.element('.email-input');
  }

  get emailError() {
    return browser.element('#emailField .help');
  }

  get passwordInput() {
    return browser.element('#passwordField .password-input');
  }

  get passwordError() {
    return browser.element('#passwordField .help');
  }

  get loginButton() {
    return browser.element('.login-button');
  }

  open() {
    super.open('/login');
  }

  isOpen() {
    return browser.isVisible('.login-wrapper');
  }

  waitForLoad() {
    return browser.element('.login-button');
  }
}

module.exports = new Login();
